import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status = {
  Pending: "pending",
  Indexing: "indexing",
  Ready: "ready",
  Failed: "failed",
  Unavailable: "unavailable",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
