import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by POST /knowledgeBase/reindex/record-group/{recordGroupId}. */
export type ReIndexRecordGroupResponseSchema = {
  /** @default "True" */
  success?: "True";
  message: string;
  recordGroupId: string;
  depth: number;
  connector?: string | null;
  eventPublished: boolean;
};

export const reIndexRecordGroupResponseSchemaSchema: Schema<ReIndexRecordGroupResponseSchema> =
  s.object<ReIndexRecordGroupResponseSchema>({
    success: s.defaulted(s.literal("True"), "True"),
    message: s.string(),
    recordGroupId: s.string(),
    depth: s.int(),
    connector: s.optionalNullable(s.string()),
    eventPublished: s.boolean(),
  });
