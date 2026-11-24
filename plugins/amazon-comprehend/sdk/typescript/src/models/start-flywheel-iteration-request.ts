import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartFlywheelIterationRequest = {
  /** The ARN of the flywheel. */
  flywheelArn: string;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startFlywheelIterationRequestSchema: Schema<StartFlywheelIterationRequest> =
  s.object<StartFlywheelIterationRequest>(
    {
      flywheelArn: s.string(),
      clientRequestToken: s.optional(s.string()),
      _keysMap: {
        flywheelArn: "FlywheelArn",
        clientRequestToken: "ClientRequestToken",
      },
    },
    { additionalProperties: s.json() },
  );
