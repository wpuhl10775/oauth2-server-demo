package com.example.oauth.server;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by wpuhl on 4/3/2017.
 */
@RestController
public class MyController {

  @RequestMapping(value = "/")
  public String landing() {
    return "hello";
  }

  /**
   * Can only access this with an access token as specified in the ResourceServerConfiguration class.
   *
   * e.g:
   *
   * http://localhost:8080/hello?access_token='.....'
   *
   * @return
   */
  @RequestMapping(value = "/hello")
  public String hello() {
    return "hello";
  }
}
