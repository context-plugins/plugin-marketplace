import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InitialBackupCreateRequest = {
  /** An optional email address to notify when the initial backup completes. */
  email?: string;
};

export const initialBackupCreateRequestSchema: Schema<InitialBackupCreateRequest> =
  s.object<InitialBackupCreateRequest>({
    email: s.optional(s.string()),
  });
