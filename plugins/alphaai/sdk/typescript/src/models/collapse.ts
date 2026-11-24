import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Collapse = {
  Story: "story",
} as const;
export type Collapse = (typeof Collapse)[keyof typeof Collapse] | (string & {});

export const collapseSchema: EnumSchema<Collapse> = s.enumOf<Collapse>(Collapse);
