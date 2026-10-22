import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsSqs = {
  Sqs: "sqs",
} as const;
export type TypeOptionsSqs = (typeof TypeOptionsSqs)[keyof typeof TypeOptionsSqs] | (string & {});

export const typeOptionsSqsSchema: EnumSchema<TypeOptionsSqs> = s.enumOf<TypeOptionsSqs>(TypeOptionsSqs);
