import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Block15 = {
  /** Discriminator value: paywall_break @default "paywall_break" */
  type?: "paywall_break";
  /** The ID of the paywall. */
  paywallId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block15Schema: Schema<Block15> = s.object<Block15>(
  {
    type: s.defaulted(s.literal("paywall_break"), "paywall_break"),
    paywallId: s.string(),
    _keysMap: {
      paywallId: "paywall_id",
    },
  },
  { additionalProperties: s.json() },
);
