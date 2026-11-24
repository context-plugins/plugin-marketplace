import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acmeExternalAccountBindingSummarySchema,
  type AcmeExternalAccountBindingSummary,
} from "./acme-external-account-binding-summary.js";

export type ListAcmeExternalAccountBindingsResponse = {
  /** The list of external account bindings. */
  externalAccountBindings?: AcmeExternalAccountBindingSummary[];
  /** A token for pagination. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeExternalAccountBindingsResponseSchema: Schema<ListAcmeExternalAccountBindingsResponse> =
  s.object<ListAcmeExternalAccountBindingsResponse>(
    {
      externalAccountBindings: s.optional(s.array(s.lazy(() => acmeExternalAccountBindingSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        externalAccountBindings: "ExternalAccountBindings",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
