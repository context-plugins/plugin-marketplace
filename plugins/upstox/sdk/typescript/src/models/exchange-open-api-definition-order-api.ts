import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Exchange to which the order is associated */
export const ExchangeOpenApiDefinitionOrderApi = {
  Nse: "NSE",
  Nfo: "NFO",
  Cds: "CDS",
  Bse: "BSE",
  Bfo: "BFO",
  Bcd: "BCD",
  Mcx: "MCX",
  Nscom: "NSCOM",
} as const;
export type ExchangeOpenApiDefinitionOrderApi =
  | (typeof ExchangeOpenApiDefinitionOrderApi)[keyof typeof ExchangeOpenApiDefinitionOrderApi]
  | (string & {});

export const exchangeOpenApiDefinitionOrderApiSchema: EnumSchema<ExchangeOpenApiDefinitionOrderApi> =
  s.enumOf<ExchangeOpenApiDefinitionOrderApi>(ExchangeOpenApiDefinitionOrderApi);
