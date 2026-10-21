import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateSessionStatus = {
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type CreateSessionStatus =
  | (typeof CreateSessionStatus)[keyof typeof CreateSessionStatus]
  | (string & {});

export const createSessionStatusSchema: EnumSchema<CreateSessionStatus> =
  s.enumOf<CreateSessionStatus>(CreateSessionStatus);
