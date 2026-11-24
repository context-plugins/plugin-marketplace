import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileMatchInternalSchema, profileMatchSchema, type ProfileMatch } from "./profile-match.js";

export type ApiBulkLookupQuery = {
  /** List of profile lookup queries for between 10 and 100 profiles */
  queries?: ProfileMatch[];
  /**
   * Name of a profile list to add looked up profiles to upon completion
   *
   * @default "API Bulk Lookup"
   */
  profileList?: string;
  /**
   * Webhook ID to post lookup results to upon completion. Find your webhook ID
   * [here](https://rocketreach.co/account?section=nav_gen_api).
   */
  webhookId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiBulkLookupQueryProperties: s.Shape<ApiBulkLookupQuery> = {
  queries: s.optional(s.array(s.lazy(() => profileMatchInternalSchema))),
  profileList: s.defaulted(s.string(), "API Bulk Lookup"),
  webhookId: s.optional(s.int()),
  _keysMap: {
    profileList: "profile_list",
    webhookId: "webhook_id",
  },
};

export const apiBulkLookupQueryInternalSchema: Schema<ApiBulkLookupQuery> = s.object<ApiBulkLookupQuery>(
  apiBulkLookupQueryProperties,
  { additionalProperties: s.json() },
);

export const apiBulkLookupQuerySchema: Schema<ApiBulkLookupQuery> = s.lazySchema(() =>
  s.object<ApiBulkLookupQuery>(
    {
      ...apiBulkLookupQueryProperties,
      queries: s.optional(s.array(s.lazy(() => profileMatchSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
