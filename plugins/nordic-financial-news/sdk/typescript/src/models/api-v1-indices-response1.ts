import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { indexDetailSchema, type IndexDetail } from "./index-detail.js";

export type ApiV1IndicesResponse1 = {
  index: IndexDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1IndicesResponse1Schema: Schema<ApiV1IndicesResponse1> = s.object<ApiV1IndicesResponse1>(
  {
    index: indexDetailSchema,
  },
  { additionalProperties: s.json() },
);
