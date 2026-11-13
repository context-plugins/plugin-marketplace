import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrganizationSize = {
  Size1: "size_1",
  Size2To10: "size_2_to_10",
  Size11To50: "size_11_to_50",
  Size51To100: "size_51_to_100",
  Size101To250: "size_101_to_250",
  Size51To250: "size_51_to_250",
  MoreThan250: "more_than_250",
} as const;
export type OrganizationSize = (typeof OrganizationSize)[keyof typeof OrganizationSize] | (string & {});

export const organizationSizeSchema: EnumSchema<OrganizationSize> =
  s.enumOf<OrganizationSize>(OrganizationSize);
