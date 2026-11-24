import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current online/offline status of the Atom. */
export const Status = {
  Online: "ONLINE",
  Offline: "OFFLINE",
  Unknown: "UNKNOWN",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
