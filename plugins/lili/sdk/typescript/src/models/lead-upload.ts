import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentDataSchema, type DocumentData } from "./document-data.js";

/** Contains the information about an additional document to upload */
export type LeadUpload = {
  /** A list of Base64 encoded documents */
  documentDataList: DocumentData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const leadUploadSchema: Schema<LeadUpload> = s.object<LeadUpload>(
  {
    documentDataList: s.array(s.lazy(() => documentDataSchema)),
  },
  { additionalProperties: s.json() },
);
