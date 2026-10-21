import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes404Error = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes404ErrorSchema: Schema<KnowledgeBaseKnowledgeHubNodes404Error> =
  s.object<KnowledgeBaseKnowledgeHubNodes404Error>({
    error: error5Schema,
  });
