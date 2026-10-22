import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta14Schema, type Meta14 } from "./meta14.js";

export type SearchArchiveResponse = {
  /** Unique identifier of the archived search. */
  id: string;
  /** Resulting status of the search after the operation. @default "archived" */
  status?: "archived";
  /** User ID of the user who archived the search. */
  archivedBy: string;
  /** Timestamp when the search was archived. */
  archivedAt: Date;
  meta: Meta14;
};

export const searchArchiveResponseSchema: Schema<SearchArchiveResponse> = s.object<SearchArchiveResponse>({
  id: s.string(),
  status: s.defaulted(s.literal("archived"), "archived"),
  archivedBy: s.string(),
  archivedAt: s.dateTime(),
  meta: meta14Schema,
});
