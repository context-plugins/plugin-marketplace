import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the PII entity is redacted with the mask character or the entity type. */
export const MaskMode = {
  Mask: "MASK",
  ReplaceWithPiiEntityType: "REPLACE_WITH_PII_ENTITY_TYPE",
} as const;
export type MaskMode = (typeof MaskMode)[keyof typeof MaskMode] | (string & {});

export const maskModeSchema: EnumSchema<MaskMode> = s.enumOf<MaskMode>(MaskMode);
