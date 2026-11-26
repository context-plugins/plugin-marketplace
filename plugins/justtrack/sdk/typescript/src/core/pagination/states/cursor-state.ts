export type CursorState<TPage> = {
  readonly cursor: string | null | undefined;
  readonly next: (page: TPage, headers: Headers) => CursorState<TPage> | null;
};

export type CursorStateConfig<TPage> = {
  readonly cursor: string | null | undefined;
  readonly nextCursor: (page: TPage, headers: Headers) => string | null | undefined;
  readonly hasMore?: (page: TPage, headers: Headers) => boolean | null | undefined;
};

export function cursorState<TPage>(config: CursorStateConfig<TPage>): CursorState<TPage> {
  const cursor = config.cursor;
  return {
    cursor,
    next(response, headers) {
      const nextCursor = config.nextCursor(response, headers);
      if (!nextCursor) return null;
      if (nextCursor === cursor) return null;
      if (config.hasMore?.(response, headers) === false) return null;
      return cursorState({ ...config, cursor: nextCursor });
    },
  };
}
