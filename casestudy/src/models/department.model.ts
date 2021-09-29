import {Entity, model, property} from '@loopback/repository';

@model()
export class Department extends Entity {
  @property({
    type: 'string',
    id: true,
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
  supervisor?: string;

  @property({
    type: 'string',
  })
  location?: string;


  constructor(data?: Partial<Department>) {
    super(data);
  }
}

export interface DepartmentRelations {
  // describe navigational properties here
}

export type DepartmentWithRelations = Department & DepartmentRelations;
