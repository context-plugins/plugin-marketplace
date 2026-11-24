import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { newIosAppSchema, type NewIosApp } from "./new-ios-app.js";

export type IosAppListResponse = {
  data?: NewIosApp[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosAppListResponseSchema: Schema<IosAppListResponse> = s.object<IosAppListResponse>(
  {
    data: s.optional(s.array(s.lazy(() => newIosAppSchema))),
    errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
    totalCount: s.defaulted(s.int(), 0),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
