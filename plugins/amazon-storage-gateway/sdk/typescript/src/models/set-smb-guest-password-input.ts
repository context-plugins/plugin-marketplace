import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SetSmbGuestPasswordInput = {
  /**
   * The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated with.
   */
  gatewayArn: string;
  /** The password that you want to set for your SMB server. */
  password: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setSmbGuestPasswordInputSchema: Schema<SetSmbGuestPasswordInput> =
  s.object<SetSmbGuestPasswordInput>(
    {
      gatewayArn: s.string(),
      password: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
        password: "Password",
      },
    },
    { additionalProperties: s.json() },
  );
