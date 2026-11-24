import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { iosDevSchema, type IosDev } from "./ios-dev.js";

export type IosDevListResponse = {
  data?: IosDev[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosDevListResponseSchema: Schema<IosDevListResponse> = s.object<IosDevListResponse>(
  {
    data: s.optional(s.array(s.lazy(() => iosDevSchema))),
    errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
    totalCount: s.defaulted(s.int(), 0),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
