FROM openjdk:17
WORKDIR /app
ADD target/springboot-docker.jar /app/springboot-docker.jar
EXPOSE 8081
ENTRYPOINT ['java', '-jar', 'springboot-docker.jar']