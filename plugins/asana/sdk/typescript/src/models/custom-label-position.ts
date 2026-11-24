import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom
 * label. This will be null if the `format` is not `custom`.
 */
export const CustomLabelPosition = {
  Prefix: "prefix",
  Suffix: "suffix",
} as const;
export type CustomLabelPosition =
  | (typeof CustomLabelPosition)[keyof typeof CustomLabelPosition]
  | (string & {});

export const customLabelPositionSchema: EnumSchema<CustomLabelPosition> =
  s.enumOf<CustomLabelPosition>(CustomLabelPosition);
