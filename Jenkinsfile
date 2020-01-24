pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3500:3500' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'echo "Done"' 
            }
        }
    }
}
