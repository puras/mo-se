package me.puras.se.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by puras on 10/5/16.
 */
@Controller
public class HomeController {

    @GetMapping("home")
    String home() {
        System.out.println("In Home");
        return "index";
    }
}
