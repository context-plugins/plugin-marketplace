import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** describes the interactions on the document */
export type DocumentInteractionsDefinition = {
  numViews?: number;
  numLikes?: number;
  numComments?: number;
};

export const documentInteractionsDefinitionSchema: Schema<DocumentInteractionsDefinition> =
  s.object<DocumentInteractionsDefinition>({
    numViews: s.optional(s.int()),
    numLikes: s.optional(s.int()),
    numComments: s.optional(s.int()),
  });
