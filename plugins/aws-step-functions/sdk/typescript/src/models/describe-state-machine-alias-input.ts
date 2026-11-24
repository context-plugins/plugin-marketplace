import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeStateMachineAliasInput = {
  /** The Amazon Resource Name (ARN) of the state machine alias. */
  stateMachineAliasArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineAliasInputSchema: Schema<DescribeStateMachineAliasInput> =
  s.object<DescribeStateMachineAliasInput>(
    {
      stateMachineAliasArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
