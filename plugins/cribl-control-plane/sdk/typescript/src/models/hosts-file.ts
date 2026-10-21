import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events based on entries collected from the hosts file */
export type HostsFile = {
  /** Enabled */
  enable?: boolean;
};

export const hostsFileSchema: Schema<HostsFile> = s.object<HostsFile>({
  enable: s.optional(s.boolean()),
});
