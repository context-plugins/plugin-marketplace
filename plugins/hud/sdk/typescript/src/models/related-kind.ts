import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RelatedKind = {
  Job: "job",
  Task: "task",
  Recent: "recent",
  Discover: "discover",
} as const;
export type RelatedKind = (typeof RelatedKind)[keyof typeof RelatedKind] | (string & {});

export const relatedKindSchema: EnumSchema<RelatedKind> = s.enumOf<RelatedKind>(RelatedKind);
