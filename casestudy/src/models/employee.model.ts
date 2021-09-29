import {Department} from './department.model';
import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';

@model()
export class Employee extends Entity {
  @property({
    type: 'string',
    id: true,
    // generated: true,
    // postgresql: {
    //   dataType: 'uuid',
    //   defaultFn: 'gen_random_uuid()',
    // },
    defaultFn: 'uuid'
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  surname?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  department?: string;

  @property({
    type: 'string',
  })
  salary?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  supervisor?: string;

  @property({
    type: 'date',
  })
  dateofstart?: string;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
