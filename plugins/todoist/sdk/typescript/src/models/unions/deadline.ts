import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  contentDeadlineObjectInternalSchema,
  contentDeadlineObjectSchema,
  type ContentDeadlineObject,
} from "../content-deadline-object.js";
import {
  contentRawDeadlineInternalSchema,
  contentRawDeadlineSchema,
  type ContentRawDeadline,
} from "../content-raw-deadline.js";

/** Absolute date object or raw string/language (v1.6+). Omission or null clears the deadline. */
export type Deadline = ContentDeadlineObject | ContentRawDeadline;

export const deadlineInternalSchema: Schema<Deadline> = s.of<Deadline>(
  s.union([
    s.lazy(() => contentDeadlineObjectInternalSchema),
    s.lazy(() => contentRawDeadlineInternalSchema),
  ]),
);

export const deadlineSchema: Schema<Deadline> = s.lazySchema(() =>
  s.of<Deadline>(
    s.union([s.lazy(() => contentDeadlineObjectSchema), s.lazy(() => contentRawDeadlineSchema)]),
  ),
);
