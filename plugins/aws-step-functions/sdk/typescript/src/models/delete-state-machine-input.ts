import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteStateMachineInput = {
  /** The Amazon Resource Name (ARN) of the state machine to delete. */
  stateMachineArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteStateMachineInputSchema: Schema<DeleteStateMachineInput> =
  s.object<DeleteStateMachineInput>(
    {
      stateMachineArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
