import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  universalCreditPersonLookupInputInternalSchema,
  universalCreditPersonLookupInputSchema,
  type UniversalCreditPersonLookupInput,
} from "./universal-credit-person-lookup-input.js";

export type UniversalCreditApiBulkLookupQuery = {
  /** Specify the lookup criteria for up to 100 people. */
  queries?: UniversalCreditPersonLookupInput[];
  /** Add specified contacts to this profile list. @default "API Bulk Lookup" */
  profileList?: string;
  /** ID of the webhook to post lookup results upon completion. */
  webhookId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const universalCreditApiBulkLookupQueryProperties: s.Shape<UniversalCreditApiBulkLookupQuery> = {
  queries: s.optional(s.array(s.lazy(() => universalCreditPersonLookupInputInternalSchema))),
  profileList: s.defaulted(s.string(), "API Bulk Lookup"),
  webhookId: s.optional(s.int()),
  _keysMap: {
    profileList: "profile_list",
    webhookId: "webhook_id",
  },
};

export const universalCreditApiBulkLookupQueryInternalSchema: Schema<UniversalCreditApiBulkLookupQuery> =
  s.object<UniversalCreditApiBulkLookupQuery>(universalCreditApiBulkLookupQueryProperties, {
    additionalProperties: s.json(),
  });

export const universalCreditApiBulkLookupQuerySchema: Schema<UniversalCreditApiBulkLookupQuery> =
  s.lazySchema(() =>
    s.object<UniversalCreditApiBulkLookupQuery>(
      {
        ...universalCreditApiBulkLookupQueryProperties,
        queries: s.optional(s.array(s.lazy(() => universalCreditPersonLookupInputSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
