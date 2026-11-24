import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeFlywheelRequest = {
  /** The Amazon Resource Number (ARN) of the flywheel. */
  flywheelArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeFlywheelRequestSchema: Schema<DescribeFlywheelRequest> =
  s.object<DescribeFlywheelRequest>(
    {
      flywheelArn: s.string(),
      _keysMap: {
        flywheelArn: "FlywheelArn",
      },
    },
    { additionalProperties: s.json() },
  );
