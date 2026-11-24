import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { journalLineInternalSchema, journalLineSchema, type JournalLine } from "./journal-line.js";

export type CompaniesApiJournalsApiJournalLinesResponse = {
  value?: JournalLine[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiJournalsApiJournalLinesResponseProperties: s.Shape<CompaniesApiJournalsApiJournalLinesResponse> =
  {
    value: s.optional(s.array(s.lazy(() => journalLineInternalSchema))),
  };

export const companiesApiJournalsApiJournalLinesResponseInternalSchema: Schema<CompaniesApiJournalsApiJournalLinesResponse> =
  s.object<CompaniesApiJournalsApiJournalLinesResponse>(
    companiesApiJournalsApiJournalLinesResponseProperties,
    { additionalProperties: s.json() },
  );

export const companiesApiJournalsApiJournalLinesResponseSchema: Schema<CompaniesApiJournalsApiJournalLinesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiJournalsApiJournalLinesResponse>(
      {
        ...companiesApiJournalsApiJournalLinesResponseProperties,
        value: s.optional(s.array(s.lazy(() => journalLineSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
