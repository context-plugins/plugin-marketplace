import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the API mode for the test execution is streaming or non-streaming. */
export const ApiMode1 = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiMode1 = (typeof ApiMode1)[keyof typeof ApiMode1] | (string & {});

export const apiMode1Schema: EnumSchema<ApiMode1> = s.enumOf<ApiMode1>(ApiMode1);
