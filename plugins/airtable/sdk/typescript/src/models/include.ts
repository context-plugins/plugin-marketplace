import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Include = {
  VisibleFieldIds: "visibleFieldIds",
} as const;
export type Include = (typeof Include)[keyof typeof Include] | (string & {});

export const includeSchema: EnumSchema<Include> = s.enumOf<Include>(Include);
