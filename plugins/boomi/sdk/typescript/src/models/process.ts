import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Boomi integration process that defines automated data flows between systems. */
export type Process = {
  /** Unique identifier of the process (component ID). */
  id?: string;
  /** Display name of the integration process. */
  name?: string;
  /** Component type, always 'process' for integration processes. */
  type?: string;
  /** ID of the folder containing this process. */
  folderId?: string;
  /** Whether this process has been deleted. */
  deleted?: boolean;
  /** Current version identifier of the process. */
  currentVersion?: string;
  /** Timestamp when the process was created. */
  createdDate?: Date;
  /** Timestamp when the process was last modified. */
  modifiedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processSchema: Schema<Process> = s.object<Process>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    folderId: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
    currentVersion: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    modifiedDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
