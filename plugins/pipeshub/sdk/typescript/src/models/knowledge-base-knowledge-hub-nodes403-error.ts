import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes403Error = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes403ErrorSchema: Schema<KnowledgeBaseKnowledgeHubNodes403Error> =
  s.object<KnowledgeBaseKnowledgeHubNodes403Error>({
    error: error5Schema,
  });
