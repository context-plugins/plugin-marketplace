import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1CampaignsDiscountCodes422Error = {
  /** Error overview. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CampaignsDiscountCodes422ErrorSchema: Schema<V1CampaignsDiscountCodes422Error> =
  s.object<V1CampaignsDiscountCodes422Error>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
