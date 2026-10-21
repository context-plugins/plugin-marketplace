import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KnowledgeBaseFolderRequest = {
  /** Name of the folder */
  folderName: string;
};

export const knowledgeBaseFolderRequestSchema: Schema<KnowledgeBaseFolderRequest> =
  s.object<KnowledgeBaseFolderRequest>({
    folderName: s.string(),
  });
