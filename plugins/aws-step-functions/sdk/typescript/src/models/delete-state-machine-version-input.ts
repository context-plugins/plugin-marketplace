import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteStateMachineVersionInput = {
  /** The Amazon Resource Name (ARN) of the state machine version to delete. */
  stateMachineVersionArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteStateMachineVersionInputSchema: Schema<DeleteStateMachineVersionInput> =
  s.object<DeleteStateMachineVersionInput>(
    {
      stateMachineVersionArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
