import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body to create an annotation. */
export type CreateAnnotationRequest = {
  /** The content of the annotation. */
  content: string;
  /** The date associated with the annotation. */
  timestamp: Date;
  /** List of report IDs associated with the annotation. */
  reports?: string[];
  /** List of label IDs to associate with the annotation. Labels must already exist. */
  labels?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAnnotationRequestSchema: Schema<CreateAnnotationRequest> =
  s.object<CreateAnnotationRequest>(
    {
      content: s.string(),
      timestamp: s.dateTime(),
      reports: s.optional(s.array(s.string())),
      labels: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
