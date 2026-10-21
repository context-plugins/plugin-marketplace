import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KnowledgeBaseFolderRequest1 = {
  folderName: string;
};

export const knowledgeBaseFolderRequest1Schema: Schema<KnowledgeBaseFolderRequest1> =
  s.object<KnowledgeBaseFolderRequest1>({
    folderName: s.string(),
  });
