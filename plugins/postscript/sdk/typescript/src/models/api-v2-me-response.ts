import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2MeResponse = {
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2MeResponseSchema: Schema<ApiV2MeResponse> = s.object<ApiV2MeResponse>(
  {
    resourceId: s.optional(s.string()),
    resourceName: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    _keysMap: {
      resourceId: "resource_id",
      resourceName: "resource_name",
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
