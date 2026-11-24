import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { familyMemberDataSchema, type FamilyMemberData } from "./family-member-data.js";

export type UserIpResponseData = {
  primaryIp?: string;
  secondaryIp?: string;
  /** ISO-8601 timestamp when primary IP was last changed. */
  primaryIpUpdatedAt?: string;
  /** ISO-8601 timestamp when secondary IP was last changed. */
  secondaryIpUpdatedAt?: string;
  primaryIpFamilyMembers?: FamilyMemberData[];
  secondaryIpFamilyMembers?: FamilyMemberData[];
  accessTokensInvalidated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userIpResponseDataSchema: Schema<UserIpResponseData> = s.object<UserIpResponseData>(
  {
    primaryIp: s.optional(s.string()),
    secondaryIp: s.optional(s.string()),
    primaryIpUpdatedAt: s.optional(s.string()),
    secondaryIpUpdatedAt: s.optional(s.string()),
    primaryIpFamilyMembers: s.optional(s.array(s.lazy(() => familyMemberDataSchema))),
    secondaryIpFamilyMembers: s.optional(s.array(s.lazy(() => familyMemberDataSchema))),
    accessTokensInvalidated: s.optional(s.boolean()),
    _keysMap: {
      primaryIp: "primary_ip",
      secondaryIp: "secondary_ip",
      primaryIpUpdatedAt: "primary_ip_updated_at",
      secondaryIpUpdatedAt: "secondary_ip_updated_at",
      primaryIpFamilyMembers: "primary_ip_family_members",
      secondaryIpFamilyMembers: "secondary_ip_family_members",
      accessTokensInvalidated: "access_tokens_invalidated",
    },
  },
  { additionalProperties: s.json() },
);
