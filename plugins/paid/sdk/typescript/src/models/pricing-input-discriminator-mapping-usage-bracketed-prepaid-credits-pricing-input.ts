import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput = {
  /** @default "signalQuantity" */
  kind?: "signalQuantity";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputSchema: Schema<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput> =
  s.object<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput>(
    {
      kind: s.defaulted(s.literal("signalQuantity"), "signalQuantity"),
    },
    { additionalProperties: s.json() },
  );
