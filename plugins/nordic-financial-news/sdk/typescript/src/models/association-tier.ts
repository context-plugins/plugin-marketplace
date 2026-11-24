import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the company relates to the article. `principal` (subject, partner, investor, competitor) is
 * the default set; `peripheral` (source, advisor, passing mention) appears only when
 * `include_peripheral=true`. Always present.
 */
export const AssociationTier = {
  Principal: "principal",
  Peripheral: "peripheral",
} as const;
export type AssociationTier = (typeof AssociationTier)[keyof typeof AssociationTier] | (string & {});

export const associationTierSchema: EnumSchema<AssociationTier> = s.enumOf<AssociationTier>(AssociationTier);
