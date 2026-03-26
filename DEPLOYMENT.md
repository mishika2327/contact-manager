# Render Deployment Guide

## Quick Deploy Steps

### 1. **Create Render Account**
- Go to [render.com](https://render.com)
- Sign up with GitHub

### 2. **Deploy to Render**
- Click "New +" → "Web Service"
- Connect your GitHub repository
- Select the `contact-manager` repo
- **Environment**: Node
- **Build Command**: (auto-detected from render.yaml)
- **Start Command**: (auto-detected from render.yaml)
- Click "Deploy"

### 3. **Configuration (Auto-Detected)**
The `render.yaml` file automatically handles:
- Building the React frontend
- Installing backend dependencies
- Starting the Node server on port 5000
- Setting NODE_ENV to production

### 4. **Access Your App**
- Your app will be available at: `https://contact-manager.onrender.com`
- API endpoints: `https://contact-manager.onrender.com/api/contacts`

---

## What Happens During Deploy

1. **Build Phase**:
   - Installs frontend dependencies
   - Builds React app (`npm run build`)
   - Installs backend dependencies

2. **Start Phase**:
   - Starts Node.js server
   - Server serves both API and frontend static files

3. **Runtime**:
   - Frontend at: `https://contact-manager.onrender.com/`
   - API at: `https://contact-manager.onrender.com/api/contacts`

---

## Important Notes

⚠️ **Data Persistence**: Using in-memory database
- Data will be **lost** when the service restarts
- For production, connect MongoDB (free tier available at MongoDB Atlas)

✅ **Free Plan Limits**:
- 0.5 CPU, 512 MB RAM
- 100 GB bandwidth/month
- Auto-spins down after 15 min inactivity

---

## Add MongoDB for Persistent Data (Optional)

1. Create free MongoDB cluster at [mongodb.com](https://mongodb.com)
2. Get connection string
3. Add environment variable in Render dashboard:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string
4. Update backend code to use MongoDB instead of memory store

---

## Monitoring & Logs

- View logs: Dashboard → Web Service → Logs
- Monitor metrics: Dashboard → Metrics
- View build output: Dashboard → Events

---

## Troubleshooting

**App shows 503 error**:
- Check logs for errors
- Ensure build completed successfully

**Frontend not loading**:
- Check that `npm run build` completed
- Verify `public/index.html` exists

**API not working**:
- Confirm backend is running (check logs)
- Check MongoDB connection if using database

---

## Deploy Updates

After pushing to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin master
```

Render will automatically redeploy! ✨
