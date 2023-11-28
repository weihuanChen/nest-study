import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
// 实体配置
@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column('text')
  name: string;

  @Column({ length: 200 })
  email: string;
}
