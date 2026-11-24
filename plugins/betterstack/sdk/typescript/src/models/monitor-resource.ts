import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonApiResourceSchema, type JsonApiResource } from "./json-api-resource.js";

export type MonitorResource = {
  data?: JsonApiResource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorResourceSchema: Schema<MonitorResource> = s.object<MonitorResource>(
  {
    data: s.optional(s.lazy(() => jsonApiResourceSchema)),
  },
  { additionalProperties: s.json() },
);
