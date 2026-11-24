import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentsCountSchema, type EnvironmentsCount } from "./environments-count.js";
import { storageInKilobytesSchema, type StorageInKilobytes } from "./storage-in-kilobytes.js";

export type Quotas = {
  environmentsCount?: EnvironmentsCount;
  storageInKilobytes?: StorageInKilobytes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotasSchema: Schema<Quotas> = s.object<Quotas>(
  {
    environmentsCount: s.optional(s.lazy(() => environmentsCountSchema)),
    storageInKilobytes: s.optional(s.lazy(() => storageInKilobytesSchema)),
  },
  { additionalProperties: s.json() },
);
