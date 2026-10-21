import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstanceRecord = {
  /** Timestamp of the last time an evaluation occurred for this context instance */
  lastSeen?: Date;
  /** The context instance ID */
  id: string;
  /** An identifier representing the application where the LaunchDarkly SDK is running */
  applicationId?: string;
  /**
   * A list of the context kinds this context was associated with that the SDK removed because they
   * were marked as anonymous at flag evaluation
   */
  anonymousKinds?: string[];
  /** The context, including its kind and attributes */
  context: Record<string, unknown>;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  access?: Access;
};

export const contextInstanceRecordSchema: Schema<ContextInstanceRecord> = s.object<ContextInstanceRecord>({
  lastSeen: s.optional(s.dateTime()),
  id: s.string(),
  applicationId: s.optional(s.string()),
  anonymousKinds: s.optional(s.array(s.string())),
  context: s.record(s.string(), s.unknown()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  access: s.optional(s.lazy(() => accessSchema)),
  _keysMap: {
    links: "_links",
    access: "_access",
  },
});
