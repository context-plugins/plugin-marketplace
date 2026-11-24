import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSmbFileShareVisibilityInput = {
  gatewayArn: string;
  /** The shares on this gateway appear when listing shares. */
  fileSharesVisible: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSmbFileShareVisibilityInputSchema: Schema<UpdateSmbFileShareVisibilityInput> =
  s.object<UpdateSmbFileShareVisibilityInput>(
    {
      gatewayArn: s.string(),
      fileSharesVisible: s.boolean(),
      _keysMap: {
        gatewayArn: "GatewayARN",
        fileSharesVisible: "FileSharesVisible",
      },
    },
    { additionalProperties: s.json() },
  );
