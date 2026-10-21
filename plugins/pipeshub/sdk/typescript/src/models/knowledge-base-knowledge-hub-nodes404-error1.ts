import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes404Error1 = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes404Error1Schema: Schema<KnowledgeBaseKnowledgeHubNodes404Error1> =
  s.object<KnowledgeBaseKnowledgeHubNodes404Error1>({
    error: error5Schema,
  });
