import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { personSchema, type Person } from "./person.js";

/**
 * Search endpoint will only fill out numDays ago since that's all we need to display shared badge;
 * docmetadata endpoint will fill out all the fields so that we can display shared badge tooltip
 */
export type Share = {
  /** The number of days that has passed since the share happened */
  numDaysAgo: number;
  sharer?: Person;
  sharingDocument?: Document;
};

export const shareSchema: Schema<Share> = s.object<Share>({
  numDaysAgo: s.int(),
  sharer: s.optional(s.lazy(() => personSchema)),
  sharingDocument: s.optional(s.lazy(() => documentSchema)),
});
