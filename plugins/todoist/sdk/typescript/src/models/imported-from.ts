import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product that created this workspace through a trusted import flow. */
export const ImportedFrom = {
  Comms: "comms",
} as const;
export type ImportedFrom = (typeof ImportedFrom)[keyof typeof ImportedFrom] | (string & {});

export const importedFromSchema: EnumSchema<ImportedFrom> = s.enumOf<ImportedFrom>(ImportedFrom);
