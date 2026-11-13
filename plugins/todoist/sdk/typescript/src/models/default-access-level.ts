import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DefaultAccessLevel = {
  Restricted: "restricted",
  Team: "team",
} as const;
export type DefaultAccessLevel = (typeof DefaultAccessLevel)[keyof typeof DefaultAccessLevel] | (string & {});

export const defaultAccessLevelSchema: EnumSchema<DefaultAccessLevel> =
  s.enumOf<DefaultAccessLevel>(DefaultAccessLevel);
