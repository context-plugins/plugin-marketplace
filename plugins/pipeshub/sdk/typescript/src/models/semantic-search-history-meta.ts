import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * `requestId` comes from `req.context?.requestId` and is omitted from the JSON when upstream
 * middleware did not set it.
 */
export type SemanticSearchHistoryMeta = {
  requestId?: string;
  timestamp: Date;
  duration: number;
};

export const semanticSearchHistoryMetaSchema: Schema<SemanticSearchHistoryMeta> =
  s.object<SemanticSearchHistoryMeta>({
    requestId: s.optional(s.string()),
    timestamp: s.dateTime(),
    duration: s.int(),
  });
