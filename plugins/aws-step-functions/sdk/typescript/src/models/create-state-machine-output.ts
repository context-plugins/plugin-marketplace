import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateStateMachineOutput = {
  /** The Amazon Resource Name (ARN) that identifies the created state machine. */
  stateMachineArn: string;
  /** The date the state machine is created. */
  creationDate: Date;
  /**
   * The Amazon Resource Name (ARN) that identifies the created state machine version. If you do not
   * set the publish parameter to true, this field returns null value.
   */
  stateMachineVersionArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStateMachineOutputSchema: Schema<CreateStateMachineOutput> =
  s.object<CreateStateMachineOutput>(
    {
      stateMachineArn: s.string(),
      creationDate: s.dateTime(),
      stateMachineVersionArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
