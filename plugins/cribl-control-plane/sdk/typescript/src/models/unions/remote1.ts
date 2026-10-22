import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { remoteSchema } from "../remote.js";

/**
 * URL of the configured remote Git repository, with credentials redacted. <code>false</code> if no
 * remote is configured.
 */
export type Remote1 = string;

export const remote1Schema: Schema<Remote1> = s.of<Remote1>(
  s.union([s.string(), s.lazy(() => remoteSchema)]),
);
