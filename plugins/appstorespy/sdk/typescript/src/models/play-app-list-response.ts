import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { newPlayAppSchema, type NewPlayApp } from "./new-play-app.js";

export type PlayAppListResponse = {
  data?: NewPlayApp[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppListResponseSchema: Schema<PlayAppListResponse> = s.object<PlayAppListResponse>(
  {
    data: s.optional(s.array(s.lazy(() => newPlayAppSchema))),
    errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
    totalCount: s.defaulted(s.int(), 0),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
