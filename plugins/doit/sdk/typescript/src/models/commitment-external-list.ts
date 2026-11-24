import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  commitmentExternalListItemSchema,
  type CommitmentExternalListItem,
} from "./commitment-external-list-item.js";

/** List of commitments. */
export type CommitmentExternalList = {
  /** Page token. It is used to request a specific page of the list results. */
  pageToken?: string;
  /** The number of returned records. */
  rowCount?: number;
  /** Array of commitments. */
  commitments?: CommitmentExternalListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commitmentExternalListSchema: Schema<CommitmentExternalList> = s.object<CommitmentExternalList>(
  {
    pageToken: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    commitments: s.optional(s.array(s.lazy(() => commitmentExternalListItemSchema))),
  },
  { additionalProperties: s.json() },
);
