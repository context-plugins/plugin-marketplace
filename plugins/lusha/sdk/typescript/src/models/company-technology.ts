import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyTechnology = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyTechnologySchema: Schema<CompanyTechnology> = s.object<CompanyTechnology>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
