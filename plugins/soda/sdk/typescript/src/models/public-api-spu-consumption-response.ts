import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiSpuConsumptionResponse = {
  from?: Date;
  spusConsumed?: number;
  to?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiSpuConsumptionResponseSchema: Schema<PublicApiSpuConsumptionResponse> =
  s.object<PublicApiSpuConsumptionResponse>(
    {
      from: s.optional(s.dateTime()),
      spusConsumed: s.optional(s.int()),
      to: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
