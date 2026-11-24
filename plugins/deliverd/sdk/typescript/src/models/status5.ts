import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** open, in_progress, blocked or awaiting_approval. Finishing has its own call */
export const Status5 = {
  Open: "open",
  InProgress: "in_progress",
  Blocked: "blocked",
  AwaitingApproval: "awaiting_approval",
} as const;
export type Status5 = (typeof Status5)[keyof typeof Status5] | (string & {});

export const status5Schema: EnumSchema<Status5> = s.enumOf<Status5>(Status5);
