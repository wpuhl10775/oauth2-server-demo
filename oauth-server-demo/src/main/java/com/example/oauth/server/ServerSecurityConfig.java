package com.example.oauth.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

/**
 * Created by wpuhl on 3/29/2017.
 */
@Configuration
//@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class ServerSecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  protected void configure(AuthenticationManagerBuilder auth)
    throws Exception {
    auth.inMemoryAuthentication()
      .withUser("john").password("123").roles("USER", "ADMIN");
   }

  @Override
  @Bean
  public AuthenticationManager authenticationManagerBean()
    throws Exception {
    return super.authenticationManagerBean();
  }


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
//      .csrf().disable()
      .authorizeRequests()
      .antMatchers("/login").permitAll()
      .anyRequest().authenticated()
      .and()
//      .httpBasic()
//      .and()
//      .exceptionHandling()
//      .authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/"));
      .formLogin().permitAll();
  }
}