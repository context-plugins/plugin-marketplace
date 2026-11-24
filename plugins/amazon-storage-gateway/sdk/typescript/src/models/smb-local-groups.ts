import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SmbLocalGroups = {
  /**
   * A list of Active Directory users and groups that have local Gateway Admin permissions.
   * Acceptable formats include: DOMAIN\User1, user1, DOMAIN\group1, and group1. Gateway Admins can
   * use the Shared Folders Microsoft Management Console snap-in to force-close files that are open
   * and locked.
   */
  gatewayAdmins?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const smbLocalGroupsSchema: Schema<SmbLocalGroups> = s.object<SmbLocalGroups>(
  {
    gatewayAdmins: s.optional(s.array(s.string())),
    _keysMap: {
      gatewayAdmins: "GatewayAdmins",
    },
  },
  { additionalProperties: s.json() },
);
