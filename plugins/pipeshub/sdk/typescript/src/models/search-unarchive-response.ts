import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta14Schema, type Meta14 } from "./meta14.js";

export type SearchUnarchiveResponse = {
  /** Unique identifier of the unarchived search. */
  id: string;
  /** Resulting status of the search after the operation. @default "unarchived" */
  status?: "unarchived";
  /** User ID of the user who unarchived the search. */
  unarchivedBy: string;
  /** Timestamp when the search was unarchived. */
  unarchivedAt: Date;
  meta: Meta14;
};

export const searchUnarchiveResponseSchema: Schema<SearchUnarchiveResponse> =
  s.object<SearchUnarchiveResponse>({
    id: s.string(),
    status: s.defaulted(s.literal("unarchived"), "unarchived"),
    unarchivedBy: s.string(),
    unarchivedAt: s.dateTime(),
    meta: meta14Schema,
  });
