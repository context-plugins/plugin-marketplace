import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NameLushaApiDocumentationProspectingSearchEnrichApi = {
  AllSignals: "allSignals",
  WebsiteTrafficIncrease: "websiteTrafficIncrease",
  WebsiteTrafficDecrease: "websiteTrafficDecrease",
  ItSpendIncrease: "itSpendIncrease",
  ItSpendDecrease: "itSpendDecrease",
  HeadcountIncrease1M: "headcountIncrease1m",
  HeadcountDecrease1M: "headcountDecrease1m",
  HeadcountIncrease3M: "headcountIncrease3m",
  HeadcountDecrease3M: "headcountDecrease3m",
  HeadcountIncrease6M: "headcountIncrease6m",
  HeadcountDecrease6M: "headcountDecrease6m",
  HeadcountIncrease12M: "headcountIncrease12m",
  HeadcountDecrease12M: "headcountDecrease12m",
  SurgeInHiring: "surgeInHiring",
  SurgeInHiringByDepartment: "surgeInHiringByDepartment",
  SurgeInHiringByLocation: "surgeInHiringByLocation",
  RiskNews: "riskNews",
  CommercialActivityNews: "commercialActivityNews",
  CorporateStrategyNews: "corporateStrategyNews",
  FinancialEventsNews: "financialEventsNews",
  PeopleNews: "peopleNews",
  MarketIntelligenceNews: "marketIntelligenceNews",
  ProductActivityNews: "productActivityNews",
} as const;
export type NameLushaApiDocumentationProspectingSearchEnrichApi =
  | (typeof NameLushaApiDocumentationProspectingSearchEnrichApi)[keyof typeof NameLushaApiDocumentationProspectingSearchEnrichApi]
  | (string & {});

export const nameLushaApiDocumentationProspectingSearchEnrichApiSchema: EnumSchema<NameLushaApiDocumentationProspectingSearchEnrichApi> =
  s.enumOf<NameLushaApiDocumentationProspectingSearchEnrichApi>(
    NameLushaApiDocumentationProspectingSearchEnrichApi,
  );
