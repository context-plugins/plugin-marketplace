import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by POST /knowledgeBase/reindex/record/{recordId}. */
export type ReIndexRecordResponseSchema = {
  /** @default "True" */
  success?: "True";
  message: string;
  recordId?: string | null;
  recordName?: string | null;
  connector?: string | null;
  eventPublished: boolean;
  userRole?: string | null;
  depth: number;
};

export const reIndexRecordResponseSchemaSchema: Schema<ReIndexRecordResponseSchema> =
  s.object<ReIndexRecordResponseSchema>({
    success: s.defaulted(s.literal("True"), "True"),
    message: s.string(),
    recordId: s.optionalNullable(s.string()),
    recordName: s.optionalNullable(s.string()),
    connector: s.optionalNullable(s.string()),
    eventPublished: s.boolean(),
    userRole: s.optionalNullable(s.string()),
    depth: s.int(),
  });
