import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollStatus = {
  Draft: "draft",
  Published: "published",
} as const;
export type PollStatus = (typeof PollStatus)[keyof typeof PollStatus] | (string & {});

export const pollStatusSchema: EnumSchema<PollStatus> = s.enumOf<PollStatus>(PollStatus);
