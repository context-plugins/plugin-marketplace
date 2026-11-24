import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { location3Schema, type Location3 } from "./location3.js";

/** Output only. Derived details about the company. */
export type CompanyDerivedInfo2 = {
  /**
   * A structured headquarters location of the company, resolved from Company.headquarters_address
   * if provided.
   */
  headquartersLocation?: Location3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyDerivedInfo2Schema: Schema<CompanyDerivedInfo2> = s.object<CompanyDerivedInfo2>(
  {
    headquartersLocation: s.optional(s.lazy(() => location3Schema)),
  },
  { additionalProperties: s.json() },
);
