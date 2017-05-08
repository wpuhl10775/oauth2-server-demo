package com.example.oauth.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 * Created by wpuhl on 4/3/2017.
 */
@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter{

  /**
   * This tells the server that only authenticated requests may access the '/hello' path.  The
   * @EnableResourceServer annotation takes care of creating the filter for the security filter chain.
   *
   * @param http
   * @throws Exception
   */
  @Override
  public void configure(HttpSecurity http) throws Exception {
    http
      .antMatcher("/hello")
      .authorizeRequests().anyRequest().authenticated();
  }
}
