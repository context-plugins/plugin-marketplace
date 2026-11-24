import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The invocation type for a Lambda data source. */
export const InvokeType = {
  RequestResponse: "REQUEST_RESPONSE",
  Event: "EVENT",
} as const;
export type InvokeType = (typeof InvokeType)[keyof typeof InvokeType] | (string & {});

export const invokeTypeSchema: EnumSchema<InvokeType> = s.enumOf<InvokeType>(InvokeType);
