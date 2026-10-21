import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Accept = {
  ApplicationVndDwollaV1HalJson: "application/vnd.dwolla.v1.hal+json",
} as const;
export type Accept = (typeof Accept)[keyof typeof Accept] | (string & {});

export const acceptSchema: EnumSchema<Accept> = s.enumOf<Accept>(Accept);
