import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partnerOutputInternalSchema, partnerOutputSchema, type PartnerOutput } from "./partner-output.js";

export type ListPartnersResponse = {
  results: PartnerOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnersResponseProperties: s.Shape<ListPartnersResponse> = {
  results: s.array(s.lazy(() => partnerOutputInternalSchema)),
};

export const listPartnersResponseInternalSchema: Schema<ListPartnersResponse> =
  s.object<ListPartnersResponse>(listPartnersResponseProperties, { additionalProperties: s.json() });

export const listPartnersResponseSchema: Schema<ListPartnersResponse> = s.lazySchema(() =>
  s.object<ListPartnersResponse>(
    {
      ...listPartnersResponseProperties,
      results: s.array(s.lazy(() => partnerOutputSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
