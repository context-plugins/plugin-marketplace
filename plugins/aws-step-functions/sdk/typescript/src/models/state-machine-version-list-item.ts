import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StateMachineVersionListItem = {
  /**
   * The Amazon Resource Name (ARN) that identifies a state machine version. The version ARN is a
   * combination of state machine ARN and the version number separated by a colon (:). For example,
   * stateMachineARN:1.
   */
  stateMachineVersionArn: string;
  /** The creation date of a state machine version. */
  creationDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateMachineVersionListItemSchema: Schema<StateMachineVersionListItem> =
  s.object<StateMachineVersionListItem>(
    {
      stateMachineVersionArn: s.string(),
      creationDate: s.dateTime(),
    },
    { additionalProperties: s.json() },
  );
