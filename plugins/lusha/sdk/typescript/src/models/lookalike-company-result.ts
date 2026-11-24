import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { location2Schema, type Location2 } from "./location2.js";

export type LookalikeCompanyResult = {
  domain: string | null;
  linkedinUrl: string | null;
  name: string;
  employeeCount: number | null;
  industry: string | null;
  location: Location2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lookalikeCompanyResultSchema: Schema<LookalikeCompanyResult> = s.object<LookalikeCompanyResult>(
  {
    domain: s.nullable(s.string()),
    linkedinUrl: s.nullable(s.string()),
    name: s.string(),
    employeeCount: s.nullable(s.int()),
    industry: s.nullable(s.string()),
    location: location2Schema,
  },
  { additionalProperties: s.json() },
);
