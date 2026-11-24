import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StorageInKilobytes = {
  /** Default storage allowance */
  default?: number;
  /** Storage based on user licenses */
  userLicenses?: number;
  /** Storage from purchased add-ons */
  additionalCapacity?: number;
  /** Total allowed storage */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storageInKilobytesSchema: Schema<StorageInKilobytes> = s.object<StorageInKilobytes>(
  {
    default: s.optional(s.int()),
    userLicenses: s.optional(s.int()),
    additionalCapacity: s.optional(s.int()),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
