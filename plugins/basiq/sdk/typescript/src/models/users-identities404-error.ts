import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum3IdentityIdentitiesApiSchema,
  type Datum3IdentityIdentitiesApi,
} from "./datum3-identity-identities-api.js";

export type UsersIdentities404Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum3IdentityIdentitiesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersIdentities404ErrorSchema: Schema<UsersIdentities404Error> =
  s.object<UsersIdentities404Error>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum3IdentityIdentitiesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
