import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relationSchema, type Relation } from "./relation.js";

export type SemanticSearchLinkedRecord = {
  relation: Relation;
  recordId: string;
  recordName: string;
  recordType: string;
  connector: string;
  /** The linked record's `statusSummary`, when it has one. */
  status?: string;
};

export const semanticSearchLinkedRecordSchema: Schema<SemanticSearchLinkedRecord> =
  s.object<SemanticSearchLinkedRecord>({
    relation: relationSchema,
    recordId: s.string(),
    recordName: s.string(),
    recordType: s.string(),
    connector: s.string(),
    status: s.optional(s.string()),
  });
