import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateStateMachineAliasOutput = {
  /** The Amazon Resource Name (ARN) that identifies the created state machine alias. */
  stateMachineAliasArn: string;
  /** The date the state machine alias was created. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStateMachineAliasOutputSchema: Schema<CreateStateMachineAliasOutput> =
  s.object<CreateStateMachineAliasOutput>(
    {
      stateMachineAliasArn: s.string(),
      creationDate: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
