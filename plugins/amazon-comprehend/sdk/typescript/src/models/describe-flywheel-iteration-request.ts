import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeFlywheelIterationRequest = {
  flywheelArn: string;
  flywheelIterationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFlywheelIterationRequestSchema: Schema<DescribeFlywheelIterationRequest> =
  s.object<DescribeFlywheelIterationRequest>(
    {
      flywheelArn: s.string(),
      flywheelIterationId: s.string(),
      _keysMap: {
        flywheelArn: "FlywheelArn",
        flywheelIterationId: "FlywheelIterationId",
      },
    },
    { additionalProperties: s.json() },
  );
