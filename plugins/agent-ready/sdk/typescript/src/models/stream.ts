import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Stream = {
  True: "true",
  False: "false",
} as const;
export type Stream = (typeof Stream)[keyof typeof Stream] | (string & {});

export const streamSchema: EnumSchema<Stream> = s.enumOf<Stream>(Stream);
