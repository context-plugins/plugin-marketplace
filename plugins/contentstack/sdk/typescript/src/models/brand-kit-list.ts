import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brandKitSchema, type BrandKit } from "./brand-kit.js";

/** A paginated list of Brand Kits. */
export type BrandKitList = {
  /** Array of Brand Kit objects. */
  data?: BrandKit[];
  /** Total count of Brand Kits in the organization. */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const brandKitListSchema: Schema<BrandKitList> = s.object<BrandKitList>(
  {
    data: s.optional(s.array(s.lazy(() => brandKitSchema))),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
