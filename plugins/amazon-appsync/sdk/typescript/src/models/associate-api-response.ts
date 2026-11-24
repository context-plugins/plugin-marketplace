import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiAssociationSchema, type ApiAssociation } from "./api-association.js";

export type AssociateApiResponse = {
  apiAssociation?: ApiAssociation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateApiResponseSchema: Schema<AssociateApiResponse> = s.object<AssociateApiResponse>(
  {
    apiAssociation: s.optional(s.lazy(() => apiAssociationSchema)),
  },
  { additionalProperties: s.json() },
);
