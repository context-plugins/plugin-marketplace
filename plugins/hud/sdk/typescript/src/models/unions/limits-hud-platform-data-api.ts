import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  boundedDataFileStorageLimitsSchema,
  type BoundedDataFileStorageLimits,
} from "../bounded-data-file-storage-limits.js";
import {
  unlimitedDataFileStorageLimitsSchema,
  type UnlimitedDataFileStorageLimits,
} from "../unlimited-data-file-storage-limits.js";

export type LimitsHudPlatformDataApi =
  | (BoundedDataFileStorageLimits & { kind: "bounded" })
  | (UnlimitedDataFileStorageLimits & { kind: "unlimited" });

export const limitsHudPlatformDataApiSchema: Schema<LimitsHudPlatformDataApi> =
  s.discriminatedUnion<LimitsHudPlatformDataApi>("kind", {
    bounded: boundedDataFileStorageLimitsSchema,
    unlimited: unlimitedDataFileStorageLimitsSchema,
  });
