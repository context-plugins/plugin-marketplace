import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsedStorage = {
  environmentType?: string;
  environmentName?: string;
  applicationFamily?: string;
  /** Used database storage in kilobytes */
  databaseStorageInKilobytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usedStorageSchema: Schema<UsedStorage> = s.object<UsedStorage>(
  {
    environmentType: s.optional(s.string()),
    environmentName: s.optional(s.string()),
    applicationFamily: s.optional(s.string()),
    databaseStorageInKilobytes: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
