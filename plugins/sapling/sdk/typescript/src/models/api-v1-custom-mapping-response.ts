import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customMappingSchema, type CustomMapping } from "./custom-mapping.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1CustomMappingResponse = {
  customMappings?: CustomMapping[];
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CustomMappingResponseSchema: Schema<ApiV1CustomMappingResponse> =
  s.object<ApiV1CustomMappingResponse>(
    {
      customMappings: s.optional(s.array(s.lazy(() => customMappingSchema))),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        customMappings: "custom_mappings",
      },
    },
    { additionalProperties: s.json() },
  );
