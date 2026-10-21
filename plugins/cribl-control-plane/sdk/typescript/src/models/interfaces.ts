import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events for each of the host’s network interfaces */
export type Interfaces = {
  /** Enabled */
  enable?: boolean;
};

export const interfacesSchema: Schema<Interfaces> = s.object<Interfaces>({
  enable: s.optional(s.boolean()),
});
