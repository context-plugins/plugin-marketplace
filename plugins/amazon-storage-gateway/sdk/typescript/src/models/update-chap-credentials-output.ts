import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateChapCredentialsOutput = {
  /**
   * The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.
   */
  targetArn?: string;
  /**
   * The iSCSI initiator that connects to the target. This is the same initiator name specified in
   * the request.
   */
  initiatorName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateChapCredentialsOutputSchema: Schema<UpdateChapCredentialsOutput> =
  s.object<UpdateChapCredentialsOutput>(
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
