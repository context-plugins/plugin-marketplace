import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NewsEventType = {
  AssetInvestment: "Asset Investment",
  AssetSale: "Asset Sale",
  CompetitorActivity: "Competitor Activity",
  EventParticipation: "Event Participation",
  ExecutiveDeparture: "Executive Departure",
  ExecutiveHire: "Executive Hire",
  ExecutivePromotion: "Executive Promotion",
  FacilitiesExpansion: "Facilities Expansion",
  FacilityClosure: "Facility Closure",
  FundingRound: "Funding Round",
  HeadcountDecrease: "Headcount Decrease",
  HeadcountIncrease: "Headcount Increase",
  Ipo: "IPO",
  LawsuitFaced: "Lawsuit Faced",
  LawsuitFiled: "Lawsuit Filed",
  Ma: "M&A",
  NewCustomer: "New Customer",
  NewLocation: "New Location",
  NewVendor: "New Vendor",
  Partnership: "Partnership",
  ProductDevelopment: "Product Development",
  ProductIntegration: "Product Integration",
  ProductLaunch: "Product Launch",
  Recognition: "Recognition",
  SecurityIssue: "Security Issue",
  StrategicInvestment: "Strategic Investment",
} as const;
export type NewsEventType = (typeof NewsEventType)[keyof typeof NewsEventType] | (string & {});

export const newsEventTypeSchema: EnumSchema<NewsEventType> = s.enumOf<NewsEventType>(NewsEventType);
