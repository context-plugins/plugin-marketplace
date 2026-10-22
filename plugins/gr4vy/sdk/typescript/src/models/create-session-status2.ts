import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the response. */
export const CreateSessionStatus2 = {
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type CreateSessionStatus2 =
  | (typeof CreateSessionStatus2)[keyof typeof CreateSessionStatus2]
  | (string & {});

export const createSessionStatus2Schema: EnumSchema<CreateSessionStatus2> =
  s.enumOf<CreateSessionStatus2>(CreateSessionStatus2);
