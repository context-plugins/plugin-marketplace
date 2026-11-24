import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  flywheelIterationPropertiesSchema,
  type FlywheelIterationProperties,
} from "./flywheel-iteration-properties.js";

export type DescribeFlywheelIterationResponse = {
  flywheelIterationProperties?: FlywheelIterationProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFlywheelIterationResponseSchema: Schema<DescribeFlywheelIterationResponse> =
  s.object<DescribeFlywheelIterationResponse>(
    {
      flywheelIterationProperties: s.optional(s.lazy(() => flywheelIterationPropertiesSchema)),
      _keysMap: {
        flywheelIterationProperties: "FlywheelIterationProperties",
      },
    },
    { additionalProperties: s.json() },
  );
