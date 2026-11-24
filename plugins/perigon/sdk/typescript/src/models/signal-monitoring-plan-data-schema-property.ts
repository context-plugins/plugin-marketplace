import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Structured event field definitions keyed by output field name. */
export type SignalMonitoringPlanDataSchemaProperty = {
  type?: string;
  /** Plain-language instructions describing the value to extract for this field. */
  description?: string | null;
  /** Whether the extracted value may be null. Defaults to true. */
  nullable?: boolean | null;
  /** Whether the field must appear in extracted event data. Defaults to true. */
  required?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalMonitoringPlanDataSchemaPropertySchema: Schema<SignalMonitoringPlanDataSchemaProperty> =
  s.object<SignalMonitoringPlanDataSchemaProperty>(
    {
      type: s.optional(s.string()),
      description: s.optionalNullable(s.string()),
      nullable: s.optionalNullable(s.boolean()),
      required: s.optionalNullable(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
