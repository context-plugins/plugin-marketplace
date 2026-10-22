import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./unions/from.js";
import { toSchema, type To } from "./unions/to.js";

/** Overlap with a date the record mentions; half-open, `from` must not be after `to`. */
export type MentionedDate = {
  from?: From;
  to?: To;
};

export const mentionedDateSchema: Schema<MentionedDate> = s.object<MentionedDate>({
  from: s.optional(s.lazy(() => fromSchema)),
  to: s.optional(s.lazy(() => toSchema)),
});
