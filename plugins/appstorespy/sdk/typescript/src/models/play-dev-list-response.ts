import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { playDevSchema, type PlayDev } from "./play-dev.js";

export type PlayDevListResponse = {
  data?: PlayDev[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playDevListResponseSchema: Schema<PlayDevListResponse> = s.object<PlayDevListResponse>(
  {
    data: s.optional(s.array(s.lazy(() => playDevSchema))),
    errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
    totalCount: s.defaulted(s.int(), 0),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
