import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  knowledgeGraphLookupMatchSchemaSchema,
  type KnowledgeGraphLookupMatchSchema,
} from "./knowledge-graph-lookup-match-schema.js";

/**
 * Response returned by GET /connectors/record/lookup.
 *
 * Field names are snake_case, matching the knowledge graph's internal view models. A miss is a 200
 * with an empty `matches` and the input echoed in `not_found_identifiers` — see the endpoint
 * description.
 */
export type LookupRecordResponseSchema = {
  matches: KnowledgeGraphLookupMatchSchema[];
  /**
   * True when one identifier resolved to more than one accessible record. Present the choice rather
   * than taking the first, or retry with `connectorName`.
   */
  ambiguous: boolean;
  /** Identifiers that resolved to nothing the caller can access. */
  notFoundIdentifiers: string[];
  /**
   * Per-identifier list of the connector types that were searched, so a miss can be retried against
   * a different `connectorName`. Keys are the identifiers exactly as supplied.
   */
  searchedConnectors?: Record<string, Record<string, unknown>>;
  /**
   * Flat-text rendering of the matches — each match's metadata block followed by a `Next:` line
   * naming a follow-up call — and a line per miss naming the connectors that were searched. Capped
   * at 25,000 bytes.
   */
  text: string;
};

export const lookupRecordResponseSchemaSchema: Schema<LookupRecordResponseSchema> =
  s.object<LookupRecordResponseSchema>({
    matches: s.array(s.lazy(() => knowledgeGraphLookupMatchSchemaSchema)),
    ambiguous: s.boolean(),
    notFoundIdentifiers: s.array(s.string()),
    searchedConnectors: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    text: s.string(),
    _keysMap: {
      notFoundIdentifiers: "not_found_identifiers",
      searchedConnectors: "searched_connectors",
    },
  });
