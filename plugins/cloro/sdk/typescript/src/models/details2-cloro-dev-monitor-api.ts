import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details2CloroDevMonitorApi = {
  field?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const details2CloroDevMonitorApiSchema: Schema<Details2CloroDevMonitorApi> =
  s.object<Details2CloroDevMonitorApi>(
    {
      field: s.optional(s.string()),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
