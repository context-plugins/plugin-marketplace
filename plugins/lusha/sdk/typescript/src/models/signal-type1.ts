import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignalType1 = {
  AllSignals: "allSignals",
  LinkedinActivityIntent: "linkedinActivityIntent",
  WebsiteTrafficDecrease: "websiteTrafficDecrease",
  WebsiteTrafficIncrease: "websiteTrafficIncrease",
  ItSpendIncrease: "itSpendIncrease",
  ItSpendDecrease: "itSpendDecrease",
  SurgeInHiring: "surgeInHiring",
  HeadcountIncrease1M: "headcountIncrease1m",
  HeadcountIncrease3M: "headcountIncrease3m",
  HeadcountIncrease6M: "headcountIncrease6m",
  HeadcountIncrease12M: "headcountIncrease12m",
  HeadcountDecrease1M: "headcountDecrease1m",
  HeadcountDecrease3M: "headcountDecrease3m",
  HeadcountDecrease6M: "headcountDecrease6m",
  HeadcountDecrease12M: "headcountDecrease12m",
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
export type SignalType1 = (typeof SignalType1)[keyof typeof SignalType1] | (string & {});

export const signalType1Schema: EnumSchema<SignalType1> = s.enumOf<SignalType1>(SignalType1);
