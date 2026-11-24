import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmeAccountSchema, type AcmeAccount } from "./acme-account.js";

export type DescribeAcmeAccountResponse = {
  acmeAccount?: AcmeAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeAccountResponseSchema: Schema<DescribeAcmeAccountResponse> =
  s.object<DescribeAcmeAccountResponse>(
    {
      acmeAccount: s.optional(s.lazy(() => acmeAccountSchema)),
      _keysMap: {
        acmeAccount: "AcmeAccount",
      },
    },
    { additionalProperties: s.json() },
  );
