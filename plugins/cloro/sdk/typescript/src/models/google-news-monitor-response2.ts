import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result11InternalSchema, result11Schema, type Result11 } from "./result11.js";

export type GoogleNewsMonitorResponse2 = {
  success: boolean;
  /** Google News results data */
  result: Result11;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleNewsMonitorResponse2Properties: s.Shape<GoogleNewsMonitorResponse2> = {
  success: s.boolean(),
  result: result11InternalSchema,
};

export const googleNewsMonitorResponse2InternalSchema: Schema<GoogleNewsMonitorResponse2> =
  s.object<GoogleNewsMonitorResponse2>(googleNewsMonitorResponse2Properties, {
    additionalProperties: s.json(),
  });

export const googleNewsMonitorResponse2Schema: Schema<GoogleNewsMonitorResponse2> = s.lazySchema(() =>
  s.object<GoogleNewsMonitorResponse2>(
    {
      ...googleNewsMonitorResponse2Properties,
      result: result11Schema,
    },
    { additionalProperties: s.json() },
  ),
);
