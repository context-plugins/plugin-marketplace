import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchAiResponseSchema,
  type SemanticSearchAiResponse,
} from "./semantic-search-ai-response.js";

/**
 * Immediate POST `/search` response: persisted search id plus the raw retrieval payload.
 * SDK-oriented modeling: named fields only at this level; dynamic-key maps inside `searchResponse`
 * use `additionalProperties` with a `$ref` (e.g. `virtual_to_record_map`) rather than boolean
 * `additionalProperties: true`, so generated clients retain typed values where possible.
 */
export type SemanticSearchExecuteResponse = {
  searchId: string;
  /**
   * Payload returned by the AI retrieval service for a semantic search (embedded in
   * `searchResponse`). Optional `virtual_to_record_map` maps each virtual record id (string key) to
   * one resolved graph record document. Empty responses from the retrieval layer omit
   * `virtual_to_record_map`; success payloads may include it alongside hits and records.
   */
  searchResponse: SemanticSearchAiResponse;
};

export const semanticSearchExecuteResponseSchema: Schema<SemanticSearchExecuteResponse> =
  s.object<SemanticSearchExecuteResponse>({
    searchId: s.string(),
    searchResponse: semanticSearchAiResponseSchema,
  });
