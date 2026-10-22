import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InitialBackupCreateResponse = {
  /** Indicates that the initial backup was queued successfully. */
  ok: boolean;
};

export const initialBackupCreateResponseSchema: Schema<InitialBackupCreateResponse> =
  s.object<InitialBackupCreateResponse>({
    ok: s.boolean(),
  });
