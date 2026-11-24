import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  NameOrCompany: "name_or_company",
  PrimaryEmail: "primary_email",
  PointOfContact: "point_of_contact",
  CreatedAt: "created_at",
  TotalContributions: "total_contributions",
  RecurringContributions: "recurring_contributions",
  LastDonationAmount: "last_donation_amount",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
