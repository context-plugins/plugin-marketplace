import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK */
export const IndustryCategory = {
  IndustryCategoryUnspecified: "INDUSTRY_CATEGORY_UNSPECIFIED",
  Automotive: "AUTOMOTIVE",
  BusinessAndIndustrialMarkets: "BUSINESS_AND_INDUSTRIAL_MARKETS",
  Finance: "FINANCE",
  Healthcare: "HEALTHCARE",
  Technology: "TECHNOLOGY",
  Travel: "TRAVEL",
  Other: "OTHER",
  ArtsAndEntertainment: "ARTS_AND_ENTERTAINMENT",
  BeautyAndFitness: "BEAUTY_AND_FITNESS",
  BooksAndLiterature: "BOOKS_AND_LITERATURE",
  FoodAndDrink: "FOOD_AND_DRINK",
  Games: "GAMES",
  HobbiesAndLeisure: "HOBBIES_AND_LEISURE",
  HomeAndGarden: "HOME_AND_GARDEN",
  InternetAndTelecom: "INTERNET_AND_TELECOM",
  LawAndGovernment: "LAW_AND_GOVERNMENT",
  News: "NEWS",
  OnlineCommunities: "ONLINE_COMMUNITIES",
  PeopleAndSociety: "PEOPLE_AND_SOCIETY",
  PetsAndAnimals: "PETS_AND_ANIMALS",
  RealEstate: "REAL_ESTATE",
  Reference: "REFERENCE",
  Science: "SCIENCE",
  Sports: "SPORTS",
  JobsAndEducation: "JOBS_AND_EDUCATION",
  Shopping: "SHOPPING",
} as const;
export type IndustryCategory = (typeof IndustryCategory)[keyof typeof IndustryCategory] | (string & {});

export const industryCategorySchema: EnumSchema<IndustryCategory> =
  s.enumOf<IndustryCategory>(IndustryCategory);
