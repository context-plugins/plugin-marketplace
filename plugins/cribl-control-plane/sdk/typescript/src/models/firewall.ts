import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events for Firewall rules entries */
export type Firewall = {
  /** Enabled */
  enable?: boolean;
};

export const firewallSchema: Schema<Firewall> = s.object<Firewall>({
  enable: s.optional(s.boolean()),
});
