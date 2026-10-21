import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Internal no-data window processing */
export const InternalProcessingMode = {
  Windowed: "windowed",
} as const;
export type InternalProcessingMode =
  | (typeof InternalProcessingMode)[keyof typeof InternalProcessingMode]
  | (string & {});

export const internalProcessingModeSchema: EnumSchema<InternalProcessingMode> =
  s.enumOf<InternalProcessingMode>(InternalProcessingMode);
