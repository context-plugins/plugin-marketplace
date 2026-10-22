import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { files1Schema, type Files1 } from "./files1.js";

/** Audit record for the revert operation, including the commit hash and affected files. */
export type Audit = {
  /** Files affected by the revert, grouped by change type. */
  files?: Files1;
  /** Worker Group the revert was applied to, if applicable. */
  group?: string;
  /** SHA-1 hash of the revert commit that was created. */
  id: string;
};

export const auditSchema: Schema<Audit> = s.object<Audit>({
  files: s.optional(s.lazy(() => files1Schema)),
  group: s.optional(s.string()),
  id: s.string(),
});
