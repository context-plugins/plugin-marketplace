import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Result of the restart request for this Node (<code>Restarting</code> or <code>Error</code>). */
export const Status = {
  Error: "Error",
  Restarting: "Restarting",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
