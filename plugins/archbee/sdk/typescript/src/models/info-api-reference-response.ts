import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataArchbeePublicApiReferenceApiSchema,
  type DataArchbeePublicApiReferenceApi,
} from "./data-archbee-public-api-reference-api.js";
import { statusSchema, type Status } from "./status.js";

/** Status */
export type InfoApiReferenceResponse = {
  /** Response Status */
  status?: Status;
  data?: DataArchbeePublicApiReferenceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const infoApiReferenceResponseSchema: Schema<InfoApiReferenceResponse> =
  s.object<InfoApiReferenceResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => dataArchbeePublicApiReferenceApiSchema)),
    },
    { additionalProperties: s.json() },
  );
