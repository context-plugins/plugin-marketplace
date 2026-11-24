import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteFlywheelRequest = {
  /** The Amazon Resource Number (ARN) of the flywheel to delete. */
  flywheelArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteFlywheelRequestSchema: Schema<DeleteFlywheelRequest> = s.object<DeleteFlywheelRequest>(
  {
    flywheelArn: s.string(),
    _keysMap: {
      flywheelArn: "FlywheelArn",
    },
  },
  { additionalProperties: s.json() },
);
