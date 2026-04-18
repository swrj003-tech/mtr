# 🚀 Hostinger Managed Node.js - Deployment Guide

Since your Hostinger Business plan supports **Managed Node.js**, we can run your shop as a full dynamic application. Follow these exact steps to go live.

---

## 1️⃣ Prepare the Database (In hPanel)

1. Log in to your Hostinger hPanel for your domain.
2. Go to **Databases** -> **MySQL Databases**.
3. Create a new database (e.g., `u123456789_mrt`).
4. Create a new database user and set a strong password. **Save these credentials!**

---

## 2️⃣ Configure the Node.js App (In hPanel)

1. Go to **Advanced** -> **Node.js**.
2. Click **Create Application** (if you haven't yet).
3. Use the following settings:
   - **Node.js Version**: Select the latest (e.g., 20.x or 22.x).
   - **Application Mode**: `Production`.
   - **Application Root**: `public_html/` (This is where your files are).
   - **Application Startup File**: `server/index.js` (CRITICAL: Do not just put `index.js`).
   - **Application URL**: Your domain (e.g., `https://yourdomain.com`).
4. Click **Next** or **Save**.

---

## 3️⃣ Set Up Environment Variables

1. Go to **Files** -> **File Manager**.
2. Navigate to your `public_html/` folder.
3. Click **New File** and name it `.env`.
4. Paste the following inside (update with your actual MySQL details from Step 1):

```env
DATABASE_URL="mysql://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:3306/YOUR_DB_NAME"
JWT_SECRET="generate_a_random_long_string_here"
NODE_ENV="production"
PORT=3001
ADMIN_EMAIL="your_email@example.com"
ADMIN_PASSWORD="set_your_admin_password"
```

5. Save the file.

---

## 4️⃣ Install Dependencies & Migrate

1. Go back to **Advanced** -> **Node.js**.
2. Click on your application.
3. Look for the **Run NPM Task** section or use the **Command Console** if available.
4. Run: `npm install --production`
5. Run: `npx prisma db push` (This creates the tables in your MySQL database).
6. Run: `npx prisma generate`

---

## 5️⃣ Build the Frontend (Local Prep)

1. I have prepared the code for you. You should run `npm run build` once locally to ensure the `dist` folder is up to date.
2. Ensure the `dist` folder is uploaded to your `public_html/` on Hostinger.

---

## 6️⃣ Start the Application

1. In the **Node.js** dashboard in hPanel, click **Start Application** (or **Restart**).
2. Visit your domain. 

### 🆘 Troubleshooting
- **403 forbidden / Blank page**: Ensure your "Application Root" is set correctly in hPanel.
- **Database error**: Verify the `DATABASE_URL` in your `.env` file matches your Hostinger MySQL details.
- **Logs**: Check the logs in the Node.js dashboard to see exact error messages.
