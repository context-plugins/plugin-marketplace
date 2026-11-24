import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What happens to events that contain fields not in the schema. One of ALLOW_EVENT, BLOCK_EVENT, or
 * OMIT_FIELDS. Optional, defaults to OMIT_FIELDS.
 */
export const OnUndeclaredFields = {
  AllowEvent: "ALLOW_EVENT",
  BlockEvent: "BLOCK_EVENT",
  OmitFields: "OMIT_FIELDS",
} as const;
export type OnUndeclaredFields = (typeof OnUndeclaredFields)[keyof typeof OnUndeclaredFields] | (string & {});

export const onUndeclaredFieldsSchema: EnumSchema<OnUndeclaredFields> =
  s.enumOf<OnUndeclaredFields>(OnUndeclaredFields);
