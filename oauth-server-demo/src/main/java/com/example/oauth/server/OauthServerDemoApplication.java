package com.example.oauth.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/***
 * This demo creates an OAuth2 authentication server.
 */
@SpringBootApplication
public class OauthServerDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthServerDemoApplication.class, args);
	}
}
