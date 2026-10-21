import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes401Error = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes401ErrorSchema: Schema<KnowledgeBaseKnowledgeHubNodes401Error> =
  s.object<KnowledgeBaseKnowledgeHubNodes401Error>({
    error: error5Schema,
  });
