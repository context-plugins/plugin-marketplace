import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChapInfo = {
  /**
   * The Amazon Resource Name (ARN) of the volume. Valid Values: 50 to 500 lowercase letters,
   * numbers, periods (.), and hyphens (-).
   */
  targetArn?: string;
  /**
   * The secret key that the initiator (for example, the Windows client) must provide to participate
   * in mutual CHAP with the target.
   */
  secretToAuthenticateInitiator?: string;
  /** The iSCSI initiator that connects to the target. */
  initiatorName?: string;
  /**
   * The secret key that the target must provide to participate in mutual CHAP with the initiator
   * (e.g., Windows client).
   */
  secretToAuthenticateTarget?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chapInfoSchema: Schema<ChapInfo> = s.object<ChapInfo>(
  {
    targetArn: s.optional(s.string()),
    secretToAuthenticateInitiator: s.optional(s.string()),
    initiatorName: s.optional(s.string()),
    secretToAuthenticateTarget: s.optional(s.string()),
    _keysMap: {
      targetArn: "TargetARN",
      secretToAuthenticateInitiator: "SecretToAuthenticateInitiator",
      initiatorName: "InitiatorName",
      secretToAuthenticateTarget: "SecretToAuthenticateTarget",
    },
  },
  { additionalProperties: s.json() },
);
