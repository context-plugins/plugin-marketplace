import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { journalInternalSchema, journalSchema, type Journal } from "./journal.js";

export type CompaniesApiJournalsResponse = {
  value?: Journal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiJournalsResponseProperties: s.Shape<CompaniesApiJournalsResponse> = {
  value: s.optional(s.array(s.lazy(() => journalInternalSchema))),
};

export const companiesApiJournalsResponseInternalSchema: Schema<CompaniesApiJournalsResponse> =
  s.object<CompaniesApiJournalsResponse>(companiesApiJournalsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiJournalsResponseSchema: Schema<CompaniesApiJournalsResponse> = s.lazySchema(() =>
  s.object<CompaniesApiJournalsResponse>(
    {
      ...companiesApiJournalsResponseProperties,
      value: s.optional(s.array(s.lazy(() => journalSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
