import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormatDeliverdDevKnowledgeApi = {
  Markdown: "markdown",
  Json: "json",
} as const;
export type FormatDeliverdDevKnowledgeApi =
  | (typeof FormatDeliverdDevKnowledgeApi)[keyof typeof FormatDeliverdDevKnowledgeApi]
  | (string & {});

export const formatDeliverdDevKnowledgeApiSchema: EnumSchema<FormatDeliverdDevKnowledgeApi> =
  s.enumOf<FormatDeliverdDevKnowledgeApi>(FormatDeliverdDevKnowledgeApi);
