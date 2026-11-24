import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StateMachineAliasListItem = {
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine alias. The alias ARN is a
   * combination of state machine ARN and the alias name separated by a colon (:). For example,
   * stateMachineARN:PROD.
   */
  stateMachineAliasArn: string;
  /** The creation date of a state machine alias. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateMachineAliasListItemSchema: Schema<StateMachineAliasListItem> =
  s.object<StateMachineAliasListItem>(
    {
      stateMachineAliasArn: s.string(),
      creationDate: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
