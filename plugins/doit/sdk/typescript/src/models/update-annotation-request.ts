import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for updating an annotation. */
export type UpdateAnnotationRequest = {
  /** The content of the annotation. */
  content?: string | null;
  /** The date associated with the annotation. */
  timestamp?: Date | null;
  /** List of report IDs associated with the annotation. */
  reports?: string[] | null;
  /** List of label IDs to associate with the annotation. Labels must already exist. */
  labels?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAnnotationRequestSchema: Schema<UpdateAnnotationRequest> =
  s.object<UpdateAnnotationRequest>(
    {
      content: s.optionalNullable(s.string()),
      timestamp: s.optionalNullable(s.dateTime()),
      reports: s.optionalNullable(s.array(s.string())),
      labels: s.optionalNullable(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
