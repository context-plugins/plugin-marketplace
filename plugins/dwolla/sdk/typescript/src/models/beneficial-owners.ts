import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded7Schema, type Embedded7 } from "./embedded7.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

/** Request model for list beneficial owners */
export type BeneficialOwners = {
  links?: Record<string, HalLink>;
  embedded?: Embedded7;
};

export const beneficialOwnersSchema: Schema<BeneficialOwners> = s.object<BeneficialOwners>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  embedded: s.optional(s.lazy(() => embedded7Schema)),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
