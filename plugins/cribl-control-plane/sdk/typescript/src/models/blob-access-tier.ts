import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Blob access tier */
export const BlobAccessTier = {
  Inferred: "Inferred",
  Hot: "Hot",
  Cool: "Cool",
  Cold: "Cold",
  Archive: "Archive",
} as const;
export type BlobAccessTier = (typeof BlobAccessTier)[keyof typeof BlobAccessTier] | (string & {});

export const blobAccessTierSchema: EnumSchema<BlobAccessTier> = s.enumOf<BlobAccessTier>(BlobAccessTier);
