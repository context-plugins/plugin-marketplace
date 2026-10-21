import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auditSchema, type Audit } from "./audit.js";

export type GitRevertResult = {
  /** Audit record for the revert operation, including the commit hash and affected files. */
  audit: Audit;
  /** If <code>true</code>, the revert was applied successfully. Otherwise, <code>false</code>. */
  reverted: boolean;
};

export const gitRevertResultSchema: Schema<GitRevertResult> = s.object<GitRevertResult>({
  audit: auditSchema,
  reverted: s.boolean(),
});
