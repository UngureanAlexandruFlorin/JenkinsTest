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
		sh 'export PATH=$PATH:/usr/bin'
                sh 'docker build . -t docker_jenkins:latest'
            }
        }
	stage('Deploy') {
		steps {
		sh 'docker pull alexandruubytex/docker_jenkins:latest'
	    }
	}
    }
}
