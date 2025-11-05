
# Node.js CI/CD Pipeline with Kubernetes

A complete Node.js application with GitHub Actions CI/CD pipeline, Docker containerization, and Kubernetes deployment.

## 📋 Project Overview

This project demonstrates a full CI/CD pipeline for a Node.js application:
- ✅ **Code Quality** - ESLint for linting
- ✅ **Testing** - Jest for unit tests with coverage
- ✅ **Security** - npm audit for vulnerability checks
- ✅ **Containerization** - Docker image build and push
- ✅ **CI/CD** - GitHub Actions pipeline
- ✅ **Orchestration** - Kubernetes deployment

## 🏗️ Project Structure

```
day-01/
├── src/
│   ├── controllers/
│   │   ├── homeController.js
│   │   ├── userController.js
│   │   └── productController.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── services/
│   │   ├── userService.js
│   │   └── productService.js
│   ├── utils/
│   │   └── loggers.js
│   └── app.js
├── k8s/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── package.json
└── README.md
```

## 🛠️ Prerequisites

- Node.js 18+
- Docker
- Kubernetes (Minikube or Docker Desktop)
- GitHub Account

## 🚀 Quick Start

### 1. Local Development
```bash
# Clone repository
git clone <repository-url>
cd day-01

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### 2. Code Quality & Formatting
```bash
# Check code quality
npm run lint

# Automatically fix issues
npm run lint:fix

# Run security audit
npm run audit
```

### 3. Docker Operations
```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run

# Test with specific tag
docker run -p 3000:3000 souravkumar6685/day01node:latest
```

## 📈 CI/CD Pipeline Steps

### Step 1: Initial Setup & Linting
- Created Node.js project with Express.js
- Set up ESLint for code formatting
- **Command used:** `npm run lint:fix`

### Step 2: Feature Branch Development
- Created `feast/ci` branch for CI/CD implementation
- Pushed code to trigger GitHub Actions
- **Branch:** `feast/ci`

### Step 3: Pull Request & Merge
- Created Pull Request from `feast/ci` to `main`
- All checks passed:
  - ✅ Code Quality (ESLint)
  - ✅ Security Audit (npm audit)
  - ✅ Unit Tests (Jest with 90%+ coverage)
  - ✅ Docker Build & Test
- Merged to main branch

![CICD Pipeline](https://i.postimg.cc/sXmVftjp/01-Track-Pipeline.png )

### Step 4: Docker Hub Deployment
- Automated Docker image build and push
- Images available on Docker Hub:
  - `souravkumar6685/day01node:latest`
  - `souravkumar6685/day01node:<commit-sha>`

![Docker Image](https://i.postimg.cc/52DGvpKX/02-Docker-Hub.png)

### Step 5: Kubernetes Deployment
```bash
# Applied Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Step 6: Local Testing
```bash
# Port forwarding for testing
kubectl port-forward -n day01-app service/day01-node-service 8080:80
```

![](https://i.postimg.cc/SscJqZ5w/03-Port-Forward.png)

```
# Access application
curl http://localhost:8080/health
curl http://localhost:8080/users
```

![](https://i.postimg.cc/xCZtDdrC/09-Port-Forwward.png)
![](https://i.postimg.cc/DwsVxtXh/04-Port-Forward.png)

### Step 7: Production Deployment
- Configured ingress for host-based routing
- Accessed via: `http://day01.local`

![](https://i.postimg.cc/L4B33v5q/07-minikube-addons-ingress.png)

![](https://i.postimg.cc/dVMQQRRG/08-http-access.png)

## ☸️ Kubernetes Deployment

### Apply Complete Stack
```bash
kubectl apply -f k8s/
```

### Check Status
```bash
kubectl get all -n stagging
```

![](https://i.postimg.cc/vBxSmnt1/05-Check-stafe.png)

### Access Application
Add to hosts file:
```
<minikube-ip> day01.local
```
Access: `http://day01.local`

![]()

## 📊 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run CI tests
npm run test:ci
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run audit        # Security audit
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## 🛡️ Quality Gates

- **ESLint**: Zero errors and warnings
- **Tests**: 90%+ code coverage
- **Security**: No critical vulnerabilities
- **Docker**: Successful build and test
- **Kubernetes**: All pods running

## 📸 Pipeline Screenshots

[Add your screenshots here showing:]
1. ✅ ESLint passing
2. ✅ Tests with coverage
3. ✅ Docker build success
4. ✅ Kubernetes deployment
5. ✅ Application running

## 🚀 Deployment URL

**Local Access:** `http://day01.local`  
**Health Check:** `http://day01.local/health`

## 📝 Learning Outcomes

- ✅ End-to-end CI/CD pipeline setup
- ✅ GitHub Actions workflow creation
- ✅ Code quality enforcement
- ✅ Automated testing strategies
- ✅ Docker image automation
- ✅ Kubernetes deployment patterns

