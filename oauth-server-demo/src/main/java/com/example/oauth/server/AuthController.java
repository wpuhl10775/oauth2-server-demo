package com.example.oauth.server;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by wpuhl on 5/2/2017.
 */
@Controller
public class AuthController {

  @PreAuthorize("#oauth2.hasScope('read')")
  @RequestMapping(method = RequestMethod.GET, value = "/foos/{id}")
  @ResponseBody
  public Foo findById( @PathVariable long id) {
    return new Foo( 1223, "sdkdfkdfkdf");
  }
}
