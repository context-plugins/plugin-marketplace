import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flywheelPropertiesSchema, type FlywheelProperties } from "./flywheel-properties.js";

export type DescribeFlywheelResponse = {
  flywheelProperties?: FlywheelProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFlywheelResponseSchema: Schema<DescribeFlywheelResponse> =
  s.object<DescribeFlywheelResponse>(
    {
      flywheelProperties: s.optional(s.lazy(() => flywheelPropertiesSchema)),
      _keysMap: {
        flywheelProperties: "FlywheelProperties",
      },
    },
    { additionalProperties: s.json() },
  );
