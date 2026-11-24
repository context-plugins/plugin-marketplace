import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelInfoSchema, type LabelInfo } from "./label-info.js";

/** Summary information about an annotation. */
export type AnnotationListItem = {
  /** The unique identifier of the annotation. */
  id: string;
  /** The content of the annotation. */
  content: string;
  /** The date associated with the annotation. */
  timestamp: Date;
  /** List of report IDs associated with the annotation. */
  reports?: string[];
  /** List of labels associated with the annotation. */
  labels?: LabelInfo[];
  /** The creation time of the annotation. */
  createTime?: Date;
  /** The time when the annotation was last updated. */
  updateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const annotationListItemSchema: Schema<AnnotationListItem> = s.object<AnnotationListItem>(
  {
    id: s.string(),
    content: s.string(),
    timestamp: s.dateTime(),
    reports: s.optional(s.array(s.string())),
    labels: s.optional(s.array(s.lazy(() => labelInfoSchema))),
    createTime: s.optional(s.dateTime()),
    updateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
