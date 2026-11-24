import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFilterSchema, type CustomFilter } from "./custom-filter.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1CustomFilterResponse = {
  customFilters?: CustomFilter[];
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CustomFilterResponseSchema: Schema<ApiV1CustomFilterResponse> =
  s.object<ApiV1CustomFilterResponse>(
    {
      customFilters: s.optional(s.array(s.lazy(() => customFilterSchema))),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        customFilters: "custom_filters",
      },
    },
    { additionalProperties: s.json() },
  );
