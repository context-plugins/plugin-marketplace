import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";

export type CompaniesApiProfilesResponse = {
  value?: Profile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiProfilesResponseSchema: Schema<CompaniesApiProfilesResponse> =
  s.object<CompaniesApiProfilesResponse>(
    {
      value: s.optional(s.array(s.lazy(() => profileSchema))),
    },
    { additionalProperties: s.json() },
  );
