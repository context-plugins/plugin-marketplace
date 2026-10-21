import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Explicit type of the Worker Group, Outpost Group, or Edge Fleet. */
export const TypeOptionsConfigGroup = {
  Edge: "edge",
  LakeAccess: "lake_access",
  LocalSearch: "local_search",
  Outpost: "outpost",
  Search: "search",
  Stream: "stream",
} as const;
export type TypeOptionsConfigGroup =
  | (typeof TypeOptionsConfigGroup)[keyof typeof TypeOptionsConfigGroup]
  | (string & {});

export const typeOptionsConfigGroupSchema: EnumSchema<TypeOptionsConfigGroup> =
  s.enumOf<TypeOptionsConfigGroup>(TypeOptionsConfigGroup);
