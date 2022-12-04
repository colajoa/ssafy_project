package com.ssafy.happyhouse.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BoardDto {

    private int idx;
	private String title;
	private String writer;
	private String content;
	private int hit;
	private String createdat;

	@Builder
	public BoardDto(int idx, String title, String writer, String content, int hit, String createdat) {
		super();
		this.idx = idx;
		this.title = title;
		this.writer = writer;
		this.content = content;
		this.hit = hit;
		this.createdat = createdat;
	}
    
}
