import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1BundleSocialOrganizationApiSchema,
  type Type1BundleSocialOrganizationApi,
} from "./type1-bundle-social-organization-api.js";

export type ItemBundleSocialOrganizationApi = {
  id: string;
  type: Type1BundleSocialOrganizationApi;
  username: string | null;
  displayName: string | null;
  messagesUsed: number;
  messagesLimit: number;
  automationRunsUsed: number;
  automationRunsLimit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialOrganizationApiSchema: Schema<ItemBundleSocialOrganizationApi> =
  s.object<ItemBundleSocialOrganizationApi>(
    {
      id: s.string(),
      type: type1BundleSocialOrganizationApiSchema,
      username: s.nullable(s.string()),
      displayName: s.nullable(s.string()),
      messagesUsed: s.float64(),
      messagesLimit: s.float64(),
      automationRunsUsed: s.float64(),
      automationRunsLimit: s.float64(),
    },
    { additionalProperties: s.json() },
  );
