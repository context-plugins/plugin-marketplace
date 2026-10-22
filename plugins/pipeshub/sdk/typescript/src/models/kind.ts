import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this account is a person who signs in (`human`) or a machine identity that automation
 * authenticates as (`service`). Absent on records written before service accounts existed, which
 * are all human.
 */
export const Kind = {
  Human: "human",
  Service: "service",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
