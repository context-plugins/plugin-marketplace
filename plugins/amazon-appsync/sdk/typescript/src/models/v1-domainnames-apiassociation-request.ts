import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DomainnamesApiassociationRequest = {
  /** The API ID. Private APIs can not be associated with custom domains. */
  apiId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DomainnamesApiassociationRequestSchema: Schema<V1DomainnamesApiassociationRequest> =
  s.object<V1DomainnamesApiassociationRequest>(
    {
      apiId: s.string(),
    },
    { additionalProperties: s.json() },
  );
