import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes400Error = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes400ErrorSchema: Schema<KnowledgeBaseKnowledgeHubNodes400Error> =
  s.object<KnowledgeBaseKnowledgeHubNodes400Error>({
    error: error5Schema,
  });
