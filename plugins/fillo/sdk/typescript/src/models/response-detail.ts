import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileSchema, type File } from "./file.js";

export type ResponseDetail = {
  id: string;
  formId: string;
  /** Answers keyed by field id. */
  data: Record<string, unknown>;
  /** Submission metadata incl. the respondent snapshot. */
  meta: Record<string, unknown> | null;
  formVersionId: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  files: File[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseDetailSchema: Schema<ResponseDetail> = s.object<ResponseDetail>(
  {
    id: s.string(),
    formId: s.string(),
    data: s.record(s.string(), s.unknown()),
    meta: s.nullable(s.record(s.string(), s.unknown())),
    formVersionId: s.nullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.nullable(s.dateTime()),
    files: s.array(s.lazy(() => fileSchema)),
  },
  { additionalProperties: s.json() },
);
