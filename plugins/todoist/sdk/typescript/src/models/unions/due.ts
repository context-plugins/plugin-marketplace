import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  contentDueObjectInternalSchema,
  contentDueObjectSchema,
  type ContentDueObject,
} from "../content-due-object.js";
import { contentRawDueInternalSchema, contentRawDueSchema, type ContentRawDue } from "../content-raw-due.js";

/**
 * Resolved object or raw string/language (v1.6+). Omission or null clears the due in this
 * replacement graph.
 */
export type Due = ContentDueObject | ContentRawDue;

export const dueInternalSchema: Schema<Due> = s.of<Due>(
  s.union([s.lazy(() => contentDueObjectInternalSchema), s.lazy(() => contentRawDueInternalSchema)]),
);

export const dueSchema: Schema<Due> = s.lazySchema(() =>
  s.of<Due>(s.union([s.lazy(() => contentDueObjectSchema), s.lazy(() => contentRawDueSchema)])),
);
