import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialAccountBundleSocialOrganizationApi = {
  id: string;
  type: string;
  username: string | null;
  displayName: string | null;
  used: number;
  limit: number;
  remaining: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialAccountBundleSocialOrganizationApiSchema: Schema<SocialAccountBundleSocialOrganizationApi> =
  s.object<SocialAccountBundleSocialOrganizationApi>(
    {
      id: s.string(),
      type: s.string(),
      username: s.nullable(s.string()),
      displayName: s.nullable(s.string()),
      used: s.float64(),
      limit: s.float64(),
      remaining: s.float64(),
    },
    { additionalProperties: s.json() },
  );
