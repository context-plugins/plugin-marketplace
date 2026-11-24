import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublishStateMachineVersionInput = {
  /** The Amazon Resource Name (ARN) of the state machine. */
  stateMachineArn: string;
  /**
   * Only publish the state machine version if the current state machine's revision ID matches the
   * specified ID. Use this option to avoid publishing a version if the state machine changed since
   * you last updated it. If the specified revision ID doesn't match the state machine's current
   * revision ID, the API returns ConflictException. To specify an initial revision ID for a state
   * machine with no revision ID assigned, specify the string INITIAL for the revisionId parameter.
   * For example, you can specify a revisionID of INITIAL when you create a state machine using the
   * CreateStateMachine API action.
   */
  revisionId?: string;
  /** An optional description of the state machine version. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishStateMachineVersionInputSchema: Schema<PublishStateMachineVersionInput> =
  s.object<PublishStateMachineVersionInput>(
    {
      stateMachineArn: s.string(),
      revisionId: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
