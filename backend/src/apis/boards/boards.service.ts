import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

/**
 * 인젝션 스코프
 * DEFAULT : 싱글톤 (한번 생성된 인스턴스를 계속 사용하는 패턴)
 * REQUEST : 매 요청마다 새로운 인스턴스를 생성
 * TRANSIENT : 매 주입마다 새로운 인스턴스를 생성
 */

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  constructor() {}

  findAll(): Board[] {
    const boards = [
      { number: 1, writer: '철수', title: '제목', contents: '내용' },
      { number: 2, writer: '영희', title: '영희 제목', contents: '영희 내용' },
      { number: 3, writer: '훈이', title: '훈이 제목', contents: '훈이 내용' },
    ];
    return boards;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    console.log(createBoardInput);

    return '게시물 등록에 성공하였습니다.';
  }
}
