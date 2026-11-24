import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result9InternalSchema, result9Schema, type Result9 } from "./result9.js";

export type GoogleMonitorResponse2 = {
  success: boolean;
  /** Google search results data */
  result: Result9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleMonitorResponse2Properties: s.Shape<GoogleMonitorResponse2> = {
  success: s.boolean(),
  result: result9InternalSchema,
};

export const googleMonitorResponse2InternalSchema: Schema<GoogleMonitorResponse2> =
  s.object<GoogleMonitorResponse2>(googleMonitorResponse2Properties, { additionalProperties: s.json() });

export const googleMonitorResponse2Schema: Schema<GoogleMonitorResponse2> = s.lazySchema(() =>
  s.object<GoogleMonitorResponse2>(
    {
      ...googleMonitorResponse2Properties,
      result: result9Schema,
    },
    { additionalProperties: s.json() },
  ),
);
