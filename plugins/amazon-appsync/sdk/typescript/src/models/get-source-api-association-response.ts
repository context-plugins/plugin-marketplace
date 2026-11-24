import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceApiAssociationSchema, type SourceApiAssociation } from "./source-api-association.js";

export type GetSourceApiAssociationResponse = {
  sourceApiAssociation?: SourceApiAssociation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSourceApiAssociationResponseSchema: Schema<GetSourceApiAssociationResponse> =
  s.object<GetSourceApiAssociationResponse>(
    {
      sourceApiAssociation: s.optional(s.lazy(() => sourceApiAssociationSchema)),
    },
    { additionalProperties: s.json() },
  );
