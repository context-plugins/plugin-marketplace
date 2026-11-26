import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Value-flow label; `transaction_code` carries the raw code. */
export const SideAlphAiRestSymbolsApi = {
  Buy: "buy",
  Sell: "sell",
} as const;
export type SideAlphAiRestSymbolsApi =
  | (typeof SideAlphAiRestSymbolsApi)[keyof typeof SideAlphAiRestSymbolsApi]
  | (string & {});

export const sideAlphAiRestSymbolsApiSchema: EnumSchema<SideAlphAiRestSymbolsApi> =
  s.enumOf<SideAlphAiRestSymbolsApi>(SideAlphAiRestSymbolsApi);
