export type PagingState<TPage, TState> = {
  readonly next: (page: TPage, headers: Headers, itemCount: number, uri: string) => TState | null;
};
