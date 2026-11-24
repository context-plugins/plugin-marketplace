import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteStateMachineAliasInput = {
  /** The Amazon Resource Name (ARN) of the state machine alias to delete. */
  stateMachineAliasArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteStateMachineAliasInputSchema: Schema<DeleteStateMachineAliasInput> =
  s.object<DeleteStateMachineAliasInput>(
    {
      stateMachineAliasArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
