import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Actor = {
  Detail: "detail",
  Search: "search",
} as const;
export type Actor = (typeof Actor)[keyof typeof Actor] | (string & {});

export const actorSchema: EnumSchema<Actor> = s.enumOf<Actor>(Actor);
