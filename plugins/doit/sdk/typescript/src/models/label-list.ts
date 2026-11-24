import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelListItemSchema, type LabelListItem } from "./label-list-item.js";

/** Paged list of labels. */
export type LabelList = {
  /** Page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Total number of labels in the result set. */
  rowCount?: number;
  labels?: LabelListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelListSchema: Schema<LabelList> = s.object<LabelList>(
  {
    pageToken: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    labels: s.optional(s.array(s.lazy(() => labelListItemSchema))),
  },
  { additionalProperties: s.json() },
);
