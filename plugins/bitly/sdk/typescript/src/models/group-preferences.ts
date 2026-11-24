import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupPreferences = {
  groupGuid?: string;
  domainPreference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupPreferencesSchema: Schema<GroupPreferences> = s.object<GroupPreferences>(
  {
    groupGuid: s.optional(s.string()),
    domainPreference: s.optional(s.string()),
    _keysMap: {
      groupGuid: "group_guid",
      domainPreference: "domain_preference",
    },
  },
  { additionalProperties: s.json() },
);
