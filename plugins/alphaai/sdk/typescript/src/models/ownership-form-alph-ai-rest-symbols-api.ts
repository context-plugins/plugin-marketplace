import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Direct or indirect holding pool. */
export const OwnershipFormAlphAiRestSymbolsApi = {
  D: "D",
  I: "I",
} as const;
export type OwnershipFormAlphAiRestSymbolsApi =
  | (typeof OwnershipFormAlphAiRestSymbolsApi)[keyof typeof OwnershipFormAlphAiRestSymbolsApi]
  | (string & {});

export const ownershipFormAlphAiRestSymbolsApiSchema: EnumSchema<OwnershipFormAlphAiRestSymbolsApi> =
  s.enumOf<OwnershipFormAlphAiRestSymbolsApi>(OwnershipFormAlphAiRestSymbolsApi);
