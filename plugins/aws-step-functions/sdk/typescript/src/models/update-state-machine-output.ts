import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateStateMachineOutput = {
  /** The date and time the state machine was updated. */
  updateDate: Date;
  /** The revision identifier for the updated state machine. */
  revisionId?: string;
  /**
   * The Amazon Resource Name (ARN) of the published state machine version. If the publish parameter
   * isn't set to true, this field returns null.
   */
  stateMachineVersionArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStateMachineOutputSchema: Schema<UpdateStateMachineOutput> =
  s.object<UpdateStateMachineOutput>(
    {
      updateDate: s.dateTime(),
      revisionId: s.optional(s.string()),
      stateMachineVersionArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
