import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    lastName: string;

    @Column
    firstName: string;

    @Column
    role: string;

    @Column
    isActive: string;
    
    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;
}