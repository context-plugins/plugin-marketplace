import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  signalMonitoringPlanDataSchemaPropertySchema,
  type SignalMonitoringPlanDataSchemaProperty,
} from "./signal-monitoring-plan-data-schema-property.js";

/** Schema for the structured data extracted into each matching event. */
export type SignalMonitoringPlanDataSchema = {
  /** Data schema version. Currently only V1 is supported. @default "V1" */
  version?: "V1";
  /** Whether extracted event data may contain fields not defined in schema. Defaults to false. */
  allowExtra?: boolean | null;
  /** Structured event field definitions keyed by output field name. */
  schema: Record<string, SignalMonitoringPlanDataSchemaProperty>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalMonitoringPlanDataSchemaSchema: Schema<SignalMonitoringPlanDataSchema> =
  s.object<SignalMonitoringPlanDataSchema>(
    {
      version: s.defaulted(s.literal("V1"), "V1"),
      allowExtra: s.optionalNullable(s.boolean()),
      schema: s.record(
        s.string(),
        s.lazy(() => signalMonitoringPlanDataSchemaPropertySchema),
      ),
    },
    { additionalProperties: s.json() },
  );
