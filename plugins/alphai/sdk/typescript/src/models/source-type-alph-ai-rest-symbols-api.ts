import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `sec_form8k` for a US filer's item 2.02, `sec_form6k` for a foreign private issuer's earnings
 * release.
 */
export const SourceTypeAlphAiRestSymbolsApi = {
  SecForm8K: "sec_form8k",
  SecForm6K: "sec_form6k",
} as const;
export type SourceTypeAlphAiRestSymbolsApi =
  | (typeof SourceTypeAlphAiRestSymbolsApi)[keyof typeof SourceTypeAlphAiRestSymbolsApi]
  | (string & {});

export const sourceTypeAlphAiRestSymbolsApiSchema: EnumSchema<SourceTypeAlphAiRestSymbolsApi> =
  s.enumOf<SourceTypeAlphAiRestSymbolsApi>(SourceTypeAlphAiRestSymbolsApi);
