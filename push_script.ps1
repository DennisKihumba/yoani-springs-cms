# PowerShell script to initialize git, add remote, add files, commit, and force push

Set-Location -LiteralPath 'C:\Users\kihum\OneDrive\Desktop\Yoani spring website\backend\yoani-cms'

# Initialize git if not already
if (!(Test-Path .git)) {
    git init
}

# Set remote
git remote add origin https://github.com/DennisKihumba/yoani-springs-cms.git 2>$null
git remote set-url origin https://github.com/DennisKihumba/yoani-springs-cms.git

# Add all files
git add .

# Commit
git commit -m "Update Strapi CMS with working configuration"

# Force push to main
git push -f origin main