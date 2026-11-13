import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Status = {
  /** Remaining transfers be performed */
  pendingTransferCount?: number;
  /** Are files actively being transferred? */
  isRunning?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusSchema: Schema<Status> = s.object<Status>(
  {
    pendingTransferCount: s.optional(s.int()),
    isRunning: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
