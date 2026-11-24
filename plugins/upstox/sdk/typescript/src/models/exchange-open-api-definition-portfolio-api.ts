import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Exchange of the trading symbol */
export const ExchangeOpenApiDefinitionPortfolioApi = {
  Nse: "NSE",
  Nfo: "NFO",
  Cds: "CDS",
  Bse: "BSE",
  Bfo: "BFO",
  Bcd: "BCD",
  Mcx: "MCX",
  Nscom: "NSCOM",
} as const;
export type ExchangeOpenApiDefinitionPortfolioApi =
  | (typeof ExchangeOpenApiDefinitionPortfolioApi)[keyof typeof ExchangeOpenApiDefinitionPortfolioApi]
  | (string & {});

export const exchangeOpenApiDefinitionPortfolioApiSchema: EnumSchema<ExchangeOpenApiDefinitionPortfolioApi> =
  s.enumOf<ExchangeOpenApiDefinitionPortfolioApi>(ExchangeOpenApiDefinitionPortfolioApi);
