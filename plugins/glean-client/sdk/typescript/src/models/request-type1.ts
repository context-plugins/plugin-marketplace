import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of request being made. */
export const RequestType1 = {
  Standard: "STANDARD",
  FullDirectory: "FULL_DIRECTORY",
} as const;
export type RequestType1 = (typeof RequestType1)[keyof typeof RequestType1] | (string & {});

export const requestType1Schema: EnumSchema<RequestType1> = s.enumOf<RequestType1>(RequestType1);
