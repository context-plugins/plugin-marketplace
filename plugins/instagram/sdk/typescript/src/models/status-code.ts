import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCode = {
  Expired: "EXPIRED",
  Error: "ERROR",
  Finished: "FINISHED",
  InProgress: "IN_PROGRESS",
  Published: "PUBLISHED",
} as const;
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode] | (string & {});

export const statusCodeSchema: EnumSchema<StatusCode> = s.enumOf<StatusCode>(StatusCode);
