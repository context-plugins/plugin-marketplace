import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  plansCurrentGetResponsesContentApplicationJsonSchemaPlanSchema,
  type PlansCurrentGetResponsesContentApplicationJsonSchemaPlan,
} from "./plans-current-get-responses-content-application-json-schema-plan.js";
import {
  plansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionSchema,
  type PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription,
} from "./plans-current-get-responses-content-application-json-schema-subscription.js";

export type PlansGetCurrentResponse200 = {
  /** The plan details, or null if the customer has no active plan */
  plan: PlansCurrentGetResponsesContentApplicationJsonSchemaPlan | null;
  /** The subscription details, or null if the customer has no active plan */
  subscription: PlansCurrentGetResponsesContentApplicationJsonSchemaSubscription | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plansGetCurrentResponse200Schema: Schema<PlansGetCurrentResponse200> =
  s.object<PlansGetCurrentResponse200>(
    {
      plan: s.nullable(s.lazy(() => plansCurrentGetResponsesContentApplicationJsonSchemaPlanSchema)),
      subscription: s.nullable(
        s.lazy(() => plansCurrentGetResponsesContentApplicationJsonSchemaSubscriptionSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
