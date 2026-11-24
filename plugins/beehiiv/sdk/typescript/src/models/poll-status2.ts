import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the poll. */
export const PollStatus2 = {
  Draft: "draft",
  Published: "published",
} as const;
export type PollStatus2 = (typeof PollStatus2)[keyof typeof PollStatus2] | (string & {});

export const pollStatus2Schema: EnumSchema<PollStatus2> = s.enumOf<PollStatus2>(PollStatus2);
