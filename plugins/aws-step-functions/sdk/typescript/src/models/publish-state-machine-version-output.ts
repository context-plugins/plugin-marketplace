import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublishStateMachineVersionOutput = {
  /** The date the version was created. */
  creationDate: Date;
  /** The Amazon Resource Name (ARN) (ARN) that identifies the state machine version. */
  stateMachineVersionArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishStateMachineVersionOutputSchema: Schema<PublishStateMachineVersionOutput> =
  s.object<PublishStateMachineVersionOutput>(
    {
      creationDate: s.dateTime(),
      stateMachineVersionArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
