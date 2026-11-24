import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateStateMachineAliasOutput = {
  /** The date and time the state machine alias was updated. */
  updateDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStateMachineAliasOutputSchema: Schema<UpdateStateMachineAliasOutput> =
  s.object<UpdateStateMachineAliasOutput>(
    {
      updateDate: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
