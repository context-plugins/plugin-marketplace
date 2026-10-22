import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";

export type ContextRecord = {
  /** Timestamp of the last time an evaluation occurred for this context */
  lastSeen?: Date;
  /** An identifier representing the application where the LaunchDarkly SDK is running */
  applicationId?: string;
  /** The context, including its kind and attributes */
  context: Record<string, unknown>;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  access?: Access;
  /**
   * The total number of associated contexts. Associated contexts are contexts that have appeared in
   * the same context instance, that is, they were part of the same flag evaluation.
   */
  associatedContexts?: number;
};

export const contextRecordSchema: Schema<ContextRecord> = s.object<ContextRecord>({
  lastSeen: s.optional(s.dateTime()),
  applicationId: s.optional(s.string()),
  context: s.record(s.string(), s.unknown()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  access: s.optional(s.lazy(() => accessSchema)),
  associatedContexts: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    access: "_access",
  },
});
