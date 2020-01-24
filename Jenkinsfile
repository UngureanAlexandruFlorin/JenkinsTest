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
                sh 'sudo docker build . -t docker_jenkins:latest'
            }
        }
	stage('Deploy') {
		steps {
		sh 'sudo docker pull alexandruubytex/docker_jenkins:latest'
	    }
	}
    }
}
