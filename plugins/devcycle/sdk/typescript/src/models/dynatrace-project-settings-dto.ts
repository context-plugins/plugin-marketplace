import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DynatraceProjectSettingsDto = {
  enabled?: boolean;
  environmentMap?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dynatraceProjectSettingsDtoSchema: Schema<DynatraceProjectSettingsDto> =
  s.object<DynatraceProjectSettingsDto>(
    {
      enabled: s.optional(s.boolean()),
      environmentMap: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
