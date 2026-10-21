import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KnowledgeBase = {
  id: string;
  name: string;
  orgId: string;
};

export const knowledgeBaseSchema: Schema<KnowledgeBase> = s.object<KnowledgeBase>({
  id: s.string(),
  name: s.string(),
  orgId: s.string(),
});
