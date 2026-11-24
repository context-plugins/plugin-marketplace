import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters sent in a request to paginate a queryset. */
export type PaginatedRequestParams = {
  cursor?: string | null;
  /** @default 20 */
  pageSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginatedRequestParamsProperties: s.Shape<PaginatedRequestParams> = {
  cursor: s.optionalNullable(s.string()),
  pageSize: s.defaulted(s.int(), 20),
  _keysMap: {
    pageSize: "page_size",
  },
};

export const paginatedRequestParamsInternalSchema: Schema<PaginatedRequestParams> =
  s.object<PaginatedRequestParams>(paginatedRequestParamsProperties, { additionalProperties: s.json() });

export const paginatedRequestParamsSchema: Schema<PaginatedRequestParams> = s.lazySchema(() =>
  s.object<PaginatedRequestParams>(
    {
      ...paginatedRequestParamsProperties,
      pageSize: s.defaulted(s.int().check(s.gt(0), s.lte(50)), 20),
    },
    { additionalProperties: s.json() },
  ),
);
