import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XDryRun = {
  True: "true",
} as const;
export type XDryRun = (typeof XDryRun)[keyof typeof XDryRun] | (string & {});

export const xDryRunSchema: EnumSchema<XDryRun> = s.enumOf<XDryRun>(XDryRun);
