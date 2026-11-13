import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Industry = {
  Agriculture: "agriculture",
  ArtsEntertainment: "arts_entertainment",
  Automotive: "automotive",
  BankingFinancialServices: "banking_financial_services",
  Construction: "construction",
  Consulting: "consulting",
  ConsumerGoods: "consumer_goods",
  Education: "education",
  EnergyUtilities: "energy_utilities",
  FoodBeverages: "food_beverages",
  GovernmentPublicSector: "government_public_sector",
  HealthcareLifeSciences: "healthcare_life_sciences",
  InformationTechnology: "information_technology",
  Insurance: "insurance",
  LegalServices: "legal_services",
  Manufacturing: "manufacturing",
  MediaCommunications: "media_communications",
  NonProfit: "non_profit",
  Pharmaceuticals: "pharmaceuticals",
  RealEstate: "real_estate",
  RetailWholesale: "retail_wholesale",
  Telecommunications: "telecommunications",
  TransportationLogistics: "transportation_logistics",
  TravelHospitality: "travel_hospitality",
  Other: "other",
} as const;
export type Industry = (typeof Industry)[keyof typeof Industry] | (string & {});

export const industrySchema: EnumSchema<Industry> = s.enumOf<Industry>(Industry);
