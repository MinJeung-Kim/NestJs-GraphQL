import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // mysql 타입 정의
@ObjectType() //grapql 타입 정의
export class Board {
  /**
   * @PrimaryGeneratedColumn : number 자동 생성
   *  increment : 1부터 증가
   *  uuid : 랜덤한 고유한 값 생성
   * rowid : 테이블에 데이터가 들어올 때마다 자동으로 증가
   * iDentity : 데이터베이스에서 자동으로 증가
   */
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int) //grapql 타입 정의
  number: number;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  writer: string;

  @Column({ type: 'varchar', length: 200 })
  @Field(() => String)
  title: string;

  @Column({ type: 'text' })
  @Field(() => String)
  contents: string;
}
