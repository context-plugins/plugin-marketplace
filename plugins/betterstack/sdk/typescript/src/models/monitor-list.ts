import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonApiResourceSchema, type JsonApiResource } from "./json-api-resource.js";

export type MonitorList = {
  data?: JsonApiResource[];
  pagination?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorListSchema: Schema<MonitorList> = s.object<MonitorList>(
  {
    data: s.optional(s.array(s.lazy(() => jsonApiResourceSchema))),
    pagination: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
