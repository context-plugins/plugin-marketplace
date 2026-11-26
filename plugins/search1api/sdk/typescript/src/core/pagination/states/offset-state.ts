export type OffsetState<TPage> = {
  readonly offset: number | null | undefined;
  readonly next: (page: TPage, headers: Headers, itemCount: number) => OffsetState<TPage> | null;
};

export type OffsetStateConfig<TPage> = {
  readonly offset: number | null | undefined;
  readonly limit: number | null | undefined;
  readonly hasMore?: (page: TPage, headers: Headers) => boolean | null | undefined;
  readonly totalItems?: (page: TPage, headers: Headers) => number | null | undefined;
};

export function offsetState<TPage>(config: OffsetStateConfig<TPage>): OffsetState<TPage> {
  return {
    offset: config.offset,
    next(response, headers, itemCount) {
      const current = config.offset ?? 0;
      const nextOffset = current + itemCount;
      const totalItems = config.totalItems?.(response, headers);
      if (totalItems != null && nextOffset >= totalItems) return null;
      if (itemCount === 0) return null;
      const hasMore = config.hasMore?.(response, headers);
      if (hasMore != null) return hasMore ? offsetState({ ...config, offset: nextOffset }) : null;
      if (totalItems == null && config.limit != null && itemCount < config.limit) return null;
      return offsetState({ ...config, offset: nextOffset });
    },
  };
}
