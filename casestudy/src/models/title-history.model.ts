import {Entity, model, property} from '@loopback/repository';

@model()
export class TitleHistory extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid'
  })
  id: string;

  @property({
    type: 'date',
  })
  dateofstart?: string;

  @property({
    type: 'date',
  })
  dateofend?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  department?: string;


  constructor(data?: Partial<TitleHistory>) {
    super(data);
  }
}

export interface TitleHistoryRelations {
  // describe navigational properties here
}

export type TitleHistoryWithRelations = TitleHistory & TitleHistoryRelations;
