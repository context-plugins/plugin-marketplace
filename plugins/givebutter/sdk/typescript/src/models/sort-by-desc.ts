import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDesc = {
  NameOrCompany: "name_or_company",
  PrimaryEmail: "primary_email",
  PointOfContact: "point_of_contact",
  CreatedAt: "created_at",
  TotalContributions: "total_contributions",
  RecurringContributions: "recurring_contributions",
  LastDonationAmount: "last_donation_amount",
} as const;
export type SortByDesc = (typeof SortByDesc)[keyof typeof SortByDesc] | (string & {});

export const sortByDescSchema: EnumSchema<SortByDesc> = s.enumOf<SortByDesc>(SortByDesc);
