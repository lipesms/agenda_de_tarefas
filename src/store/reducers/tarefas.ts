import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

import Tarefa from '../../models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'lavar a louça',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'lavar a louça da noite',
      2
    ),
    new Tarefa(
      'Ler',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Ler O messias de Duna',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
