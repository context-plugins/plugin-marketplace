import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes403Error1 = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes403Error1Schema: Schema<KnowledgeBaseKnowledgeHubNodes403Error1> =
  s.object<KnowledgeBaseKnowledgeHubNodes403Error1>({
    error: error5Schema,
  });
