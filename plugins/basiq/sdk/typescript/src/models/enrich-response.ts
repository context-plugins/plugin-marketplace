import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataEnrichApiSchema, type DataEnrichApi } from "./data-enrich-api.js";
import { links1EnrichApiSchema, type Links1EnrichApi } from "./links1-enrich-api.js";

export type EnrichResponse = {
  /** Value is "enrich" */
  type: string;
  /** Debit or Credit transaction */
  direction: string;
  /**
   * For Debit: payment, bank-fee, cash-withdrawal, transfer, loan-interest. <br/> For Credit:
   * refund, direct-credit, interest, transfer, loan-repayment.
   */
  class: string;
  /** Container object, containing enrich details. */
  data?: DataEnrichApi;
  links: Links1EnrichApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichResponseSchema: Schema<EnrichResponse> = s.object<EnrichResponse>(
  {
    type: s.string(),
    direction: s.string(),
    class: s.string(),
    data: s.optional(s.lazy(() => dataEnrichApiSchema)),
    links: links1EnrichApiSchema,
  },
  { additionalProperties: s.json() },
);
