import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { smbLocalGroupsSchema, type SmbLocalGroups } from "./smb-local-groups.js";

export type UpdateSmbLocalGroupsInput = {
  gatewayArn: string;
  smbLocalGroups: SmbLocalGroups;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSmbLocalGroupsInputSchema: Schema<UpdateSmbLocalGroupsInput> =
  s.object<UpdateSmbLocalGroupsInput>(
    {
      gatewayArn: s.string(),
      smbLocalGroups: smbLocalGroupsSchema,
      _keysMap: {
        gatewayArn: "GatewayARN",
        smbLocalGroups: "SMBLocalGroups",
      },
    },
    { additionalProperties: s.json() },
  );
