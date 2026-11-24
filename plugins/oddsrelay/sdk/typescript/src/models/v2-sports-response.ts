import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageMetaSchema, type PageMeta } from "./page-meta.js";
import { sportSchema, type Sport } from "./sport.js";

export type V2SportsResponse = {
  meta: PageMeta;
  data: Sport[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2SportsResponseSchema: Schema<V2SportsResponse> = s.object<V2SportsResponse>(
  {
    meta: pageMetaSchema,
    data: s.array(s.lazy(() => sportSchema)),
  },
  { additionalProperties: s.json() },
);
