import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SecurityGroup = {
  id?: string;
  /** The Microsoft Entra security group ID */
  groupId?: string;
  /** The security group code */
  code?: string;
  /** The security group display name */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const securityGroupSchema: Schema<SecurityGroup> = s.object<SecurityGroup>(
  {
    id: s.optional(s.string()),
    groupId: s.optional(s.string()),
    code: s.optional(s.string()),
    displayName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
