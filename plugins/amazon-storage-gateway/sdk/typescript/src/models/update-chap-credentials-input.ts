import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateChapCredentialsInput = {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes
   * operation to return the TargetARN for specified VolumeARN.
   */
  targetArn: string;
  /**
   * The secret key that the initiator (for example, the Windows client) must provide to participate
   * in mutual CHAP with the target. The secret key must be between 12 and 16 bytes when encoded in
   * UTF-8.
   */
  secretToAuthenticateInitiator: string;
  /** The iSCSI initiator that connects to the target. */
  initiatorName: string;
  /**
   * The secret key that the target must provide to participate in mutual CHAP with the initiator
   * (e.g. Windows client). Byte constraints: Minimum bytes of 12. Maximum bytes of 16. The secret
   * key must be between 12 and 16 bytes when encoded in UTF-8.
   */
  secretToAuthenticateTarget?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateChapCredentialsInputSchema: Schema<UpdateChapCredentialsInput> =
  s.object<UpdateChapCredentialsInput>(
    {
      targetArn: s.string(),
      secretToAuthenticateInitiator: s.string(),
      initiatorName: s.string(),
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
