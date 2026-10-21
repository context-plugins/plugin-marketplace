import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the kind of knowledge a tool would access or modify. */
export const KnowledgeType = {
  NeutralKnowledge: "NEUTRAL_KNOWLEDGE",
  CompanyKnowledge: "COMPANY_KNOWLEDGE",
  WorldKnowledge: "WORLD_KNOWLEDGE",
} as const;
export type KnowledgeType = (typeof KnowledgeType)[keyof typeof KnowledgeType] | (string & {});

export const knowledgeTypeSchema: EnumSchema<KnowledgeType> = s.enumOf<KnowledgeType>(KnowledgeType);
