import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes400Error1 = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes400Error1Schema: Schema<KnowledgeBaseKnowledgeHubNodes400Error1> =
  s.object<KnowledgeBaseKnowledgeHubNodes400Error1>({
    error: error5Schema,
  });
