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
		sh 'docker run alexandruubytex/docker_jenkins:latest -p 3500:3500'
	    }
	}
    }
}
