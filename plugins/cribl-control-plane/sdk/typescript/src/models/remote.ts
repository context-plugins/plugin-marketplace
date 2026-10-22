import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Remote = {
  False: "false",
} as const;
export type Remote = (typeof Remote)[keyof typeof Remote] | (string & {});

export const remoteSchema: EnumSchema<Remote> = s.enumOf<Remote>(Remote);
