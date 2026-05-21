package com.pentagon.Gemini.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.pentagon.Gemini.DTO.PromptRequest;
import com.pentagon.Gemini.Service.AIService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AIController {

    @Autowired
    AIService aiservice;

    @PostMapping("/ask")
    public String ask(@RequestBody PromptRequest request) throws Exception {

        return aiservice.getAnswer(request.getPrompt());
    }
}