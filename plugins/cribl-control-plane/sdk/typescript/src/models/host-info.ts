import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events based on the host system’s current state */
export type HostInfo = {
  /** Enabled */
  enable?: boolean;
};

export const hostInfoSchema: Schema<HostInfo> = s.object<HostInfo>({
  enable: s.optional(s.boolean()),
});
