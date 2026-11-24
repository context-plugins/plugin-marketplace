import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are
 * embeddable and served to end-customers; a DRAFT is not. For organization-scoped views, publishing
 * is only a 'ready to use' marker — both DRAFT and PUBLISHED are visible to your organization's
 * members in Paid (publishing does not change who in the org can see it), and neither is ever
 * embeddable to an end-customer.
 */
export const CustomViewStatus = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type CustomViewStatus = (typeof CustomViewStatus)[keyof typeof CustomViewStatus] | (string & {});

export const customViewStatusSchema: EnumSchema<CustomViewStatus> =
  s.enumOf<CustomViewStatus>(CustomViewStatus);
