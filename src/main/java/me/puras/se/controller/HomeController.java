package me.puras.se.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by puras on 10/5/16.
 */
@RestController
public class HomeController {

    @GetMapping("home")
    String home() {
        System.out.println("In Home");
        return "Hello mo-se project!中文一下";
    }
}
