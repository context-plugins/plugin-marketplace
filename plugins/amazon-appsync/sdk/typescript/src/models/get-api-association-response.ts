import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiAssociationSchema, type ApiAssociation } from "./api-association.js";

export type GetApiAssociationResponse = {
  apiAssociation?: ApiAssociation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getApiAssociationResponseSchema: Schema<GetApiAssociationResponse> =
  s.object<GetApiAssociationResponse>(
    {
      apiAssociation: s.optional(s.lazy(() => apiAssociationSchema)),
    },
    { additionalProperties: s.json() },
  );
