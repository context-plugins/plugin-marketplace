import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type KnowledgeBaseKnowledgeHubNodes500Error = {
  error: Error5;
};

export const knowledgeBaseKnowledgeHubNodes500ErrorSchema: Schema<KnowledgeBaseKnowledgeHubNodes500Error> =
  s.object<KnowledgeBaseKnowledgeHubNodes500Error>({
    error: error5Schema,
  });
