import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Kind12 = {
  DependsOn: "depends_on",
  Blocks: "blocks",
  RelatedTo: "related_to",
  Supersedes: "supersedes",
  ResultedIn: "resulted_in",
} as const;
export type Kind12 = (typeof Kind12)[keyof typeof Kind12] | (string & {});

export const kind12Schema: EnumSchema<Kind12> = s.enumOf<Kind12>(Kind12);
