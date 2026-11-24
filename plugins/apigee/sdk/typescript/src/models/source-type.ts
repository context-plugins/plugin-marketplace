import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the source. */
export const SourceType = {
  SourceTypeUnspecified: "SOURCE_TYPE_UNSPECIFIED",
  Plugin: "PLUGIN",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType] | (string & {});

export const sourceTypeSchema: EnumSchema<SourceType> = s.enumOf<SourceType>(SourceType);
