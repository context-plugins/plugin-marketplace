import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VersionsRep = {
  /**
   * A list of all valid API versions. To learn more about our versioning, read
   * [Versioning](https://launchdarkly.com/docs/api#versioning).
   */
  validVersions: number[];
  latestVersion: number;
  currentVersion: number;
  /**
   * Whether the version of the API currently is use is a beta version. This is always
   * <code>true</code> if you add the <code>LD-API-Version: beta</code> header to your request.
   */
  beta?: boolean;
};

export const versionsRepSchema: Schema<VersionsRep> = s.object<VersionsRep>({
  validVersions: s.array(s.int()),
  latestVersion: s.int(),
  currentVersion: s.int(),
  beta: s.optional(s.boolean()),
});
