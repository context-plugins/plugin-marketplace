import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum3IdentityIdentitiesApiSchema,
  type Datum3IdentityIdentitiesApi,
} from "./datum3-identity-identities-api.js";

export type UsersTransactions404Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum3IdentityIdentitiesApi[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersTransactions404ErrorSchema: Schema<UsersTransactions404Error> =
  s.object<UsersTransactions404Error>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum3IdentityIdentitiesApiSchema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
