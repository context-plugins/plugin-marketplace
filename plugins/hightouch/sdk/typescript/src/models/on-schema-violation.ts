import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What happens to events that violate the schema. One of ALLOW_EVENT or BLOCK_EVENT. Optional,
 * defaults to BLOCK_EVENT.
 */
export const OnSchemaViolation = {
  AllowEvent: "ALLOW_EVENT",
  BlockEvent: "BLOCK_EVENT",
} as const;
export type OnSchemaViolation = (typeof OnSchemaViolation)[keyof typeof OnSchemaViolation] | (string & {});

export const onSchemaViolationSchema: EnumSchema<OnSchemaViolation> =
  s.enumOf<OnSchemaViolation>(OnSchemaViolation);
