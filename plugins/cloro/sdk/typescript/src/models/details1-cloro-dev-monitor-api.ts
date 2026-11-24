import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details1CloroDevMonitorApi = {
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const details1CloroDevMonitorApiSchema: Schema<Details1CloroDevMonitorApi> =
  s.object<Details1CloroDevMonitorApi>(
    {
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
