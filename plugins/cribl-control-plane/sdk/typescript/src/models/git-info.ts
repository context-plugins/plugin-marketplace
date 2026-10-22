import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { remote1Schema, type Remote1 } from "./unions/remote1.js";

export type GitInfo = {
  /**
   * URL of the configured remote Git repository, with credentials redacted. <code>false</code> if
   * no remote is configured.
   */
  remote: Remote1;
  /**
   * If <code>true</code>, Git versioning is enabled for this Cribl instance. Otherwise,
   * <code>false</code>.
   */
  versioning: boolean;
};

export const gitInfoSchema: Schema<GitInfo> = s.object<GitInfo>({
  remote: remote1Schema,
  versioning: s.boolean(),
});
