pipeline {
    agent any /*{
        docker {
            image 'node:6-alpine' 
            args '-p 3500:3500' 
        }
    }*/
    stages {
        stage('Build') { 
            steps {
		// sh 'echo $pwd'
		sh 'docker login -u "alexandruubytex" -p "333Albastru333"'
                sh 'docker build . -t alexandruubytex/docker_jenkins:latest'
            }
        }
	stage('Deploy') {
		steps {
		sh 'docker push alexandruubytex/docker_jenkins:latest'
		sh 'docker rm docker_jenkins'
		sh 'docker run -d --name docker_jenkins -p 3500:3500 alexandruubytex/docker_jenkins:latest'
	    }
	}
    }
}
