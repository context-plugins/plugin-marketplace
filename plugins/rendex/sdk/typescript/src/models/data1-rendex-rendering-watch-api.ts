import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { watchRunInternalSchema, watchRunSchema, type WatchRun } from "./watch-run.js";

export type Data1RendexRenderingWatchApi = {
  items?: WatchRun[];
  /** Pass as cursor to fetch the next page; absent on the last page */
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const data1RendexRenderingWatchApiProperties: s.Shape<Data1RendexRenderingWatchApi> = {
  items: s.optional(s.array(s.lazy(() => watchRunInternalSchema))),
  nextCursor: s.optional(s.string()),
};

export const data1RendexRenderingWatchApiInternalSchema: Schema<Data1RendexRenderingWatchApi> =
  s.object<Data1RendexRenderingWatchApi>(data1RendexRenderingWatchApiProperties, {
    additionalProperties: s.json(),
  });

export const data1RendexRenderingWatchApiSchema: Schema<Data1RendexRenderingWatchApi> = s.lazySchema(() =>
  s.object<Data1RendexRenderingWatchApi>(
    {
      ...data1RendexRenderingWatchApiProperties,
      items: s.optional(s.array(s.lazy(() => watchRunSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
