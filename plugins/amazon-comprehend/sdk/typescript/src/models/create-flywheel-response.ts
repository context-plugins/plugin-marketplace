import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateFlywheelResponse = {
  /** The Amazon Resource Number (ARN) of the flywheel. */
  flywheelArn?: string;
  /** The Amazon Resource Number (ARN) of the active model version. */
  activeModelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFlywheelResponseSchema: Schema<CreateFlywheelResponse> = s.object<CreateFlywheelResponse>(
  {
    flywheelArn: s.optional(s.string()),
    activeModelArn: s.optional(s.string()),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      activeModelArn: "ActiveModelArn",
    },
  },
  { additionalProperties: s.json() },
);
