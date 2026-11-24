import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumIdentityIdentitiesApiSchema,
  type DatumIdentityIdentitiesApi,
} from "./datum-identity-identities-api.js";

/** Object containing details for identities. */
export type IdentitiesGetResponseResource = {
  data: DatumIdentityIdentitiesApi[];
  /** Type, always "list". */
  type: string;
  /** Count of the identities in the response. */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identitiesGetResponseResourceSchema: Schema<IdentitiesGetResponseResource> =
  s.object<IdentitiesGetResponseResource>(
    {
      data: s.array(s.lazy(() => datumIdentityIdentitiesApiSchema)),
      type: s.string(),
      count: s.int(),
    },
    { additionalProperties: s.json() },
  );
