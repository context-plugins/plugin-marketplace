import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events for DNS resolvers and search entries */
export type Dns = {
  /** Enabled */
  enable?: boolean;
};

export const dnsSchema: Schema<Dns> = s.object<Dns>({
  enable: s.optional(s.boolean()),
});
