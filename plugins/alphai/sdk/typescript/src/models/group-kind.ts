import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the peers were grouped by industry or the broader sector. */
export const GroupKind = {
  Industry: "industry",
  Sector: "sector",
} as const;
export type GroupKind = (typeof GroupKind)[keyof typeof GroupKind] | (string & {});

export const groupKindSchema: EnumSchema<GroupKind> = s.enumOf<GroupKind>(GroupKind);
