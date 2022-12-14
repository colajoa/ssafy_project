package com.ssafy.happyhouse.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class Token {
  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public static final class Request{
    private String id;
    // password
    private String secret;
  }

  @Data
  @Builder
  @NoArgsConstructor
  @AllArgsConstructor
  public static final class Response{
    private String token;
  }
}
