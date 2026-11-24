import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchInternalSchema, watchSchema, type Watch } from "./watch.js";

export type DataRendexRenderingWatchApi = {
  items?: Watch[];
  /** Pass as cursor to fetch the next page; absent on the last page */
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataRendexRenderingWatchApiProperties: s.Shape<DataRendexRenderingWatchApi> = {
  items: s.optional(s.array(s.lazy(() => watchInternalSchema))),
  nextCursor: s.optional(s.string()),
};

export const dataRendexRenderingWatchApiInternalSchema: Schema<DataRendexRenderingWatchApi> =
  s.object<DataRendexRenderingWatchApi>(dataRendexRenderingWatchApiProperties, {
    additionalProperties: s.json(),
  });

export const dataRendexRenderingWatchApiSchema: Schema<DataRendexRenderingWatchApi> = s.lazySchema(() =>
  s.object<DataRendexRenderingWatchApi>(
    {
      ...dataRendexRenderingWatchApiProperties,
      items: s.optional(s.array(s.lazy(() => watchSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
