# BTEB Booklist Project

## Overview
A web application that displays BTEB (Bangladesh Technical Education Board) technology booklists for Regulation 2022 curriculum. Shows subjects and codes for semesters 1-8 across 32 technologies.

## Features
- Interactive UI to browse booklists by technology
- Category filtering (Engineering, Textile, Agriculture, Specialized)
- View all semesters or individual semester subjects
- RESTful API endpoints for data access

## Technologies Included (32 Total)

### Engineering (20)
- Computer Science & Technology, Electrical, Civil, Mechanical, Electronics
- Power, RAC, Automobile, Architecture, Food, Surveying
- Chemical, Ceramic, Glass, Environmental, Mechatronics
- Telecommunication, Construction

### Textile (8)
- Yarn Manufacturing, Fabric Manufacturing, Wet Processing
- Apparel Manufacturing, Fashion Design, Merchandising & Market
- Jute Product Manufacturing, Textile Machine Design & Maintenance

### Agriculture (3)
- Diploma In Agriculture, Diploma In Fisheries, Diploma In Forestry

### Specialized (3)
- Electromedical Technology, Printing Technology, Graphic Design Technology

## API Endpoints
- `GET /api/technologies` - List all available technologies
- `GET /api/booklist?technology=<name>` - Get booklist for a specific technology

Example: `/api/booklist?technology=computer-science-technology`

## Project Structure
- `server.js` - Node.js HTTP server for local development
- `public/index.html` - Frontend UI with category filtering
- `api/data.js` - All booklist data (shared between local and Vercel)
- `api/technologies.js` - Vercel serverless function for technologies endpoint
- `api/booklist.js` - Vercel serverless function for booklist endpoint
- `vercel.json` - Vercel deployment configuration

## Running Locally
The server runs on port 5000.

## Deploy to Vercel
1. Push code to GitHub
2. Import project to Vercel (vercel.com)
3. Vercel will auto-detect the configuration from vercel.json
4. The API endpoints will be at /api/technologies and /api/booklist
