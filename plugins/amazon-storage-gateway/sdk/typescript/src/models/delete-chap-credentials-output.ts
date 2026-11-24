import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteChapCredentialsOutput = {
  /** The Amazon Resource Name (ARN) of the target. */
  targetArn?: string;
  /** The iSCSI initiator that connects to the target. */
  initiatorName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteChapCredentialsOutputSchema: Schema<DeleteChapCredentialsOutput> =
  s.object<DeleteChapCredentialsOutput>(
    {
      targetArn: s.optional(s.string()),
      initiatorName: s.optional(s.string()),
      _keysMap: {
        targetArn: "TargetARN",
        initiatorName: "InitiatorName",
      },
    },
    { additionalProperties: s.json() },
  );
