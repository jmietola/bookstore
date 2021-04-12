import createRestDuck from '../utils/restDuckGenerator';
import { RootState } from '../app/store';

export interface Book {
  id: string;
  isbn: string;
  title: string;
}

const { reducer, adapter, actions } = createRestDuck<Book>('books');

export const {
  selectById: selectBookById,
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks
} = adapter.getSelectors((state: RootState) => state.books);

export { reducer, actions, adapter };
