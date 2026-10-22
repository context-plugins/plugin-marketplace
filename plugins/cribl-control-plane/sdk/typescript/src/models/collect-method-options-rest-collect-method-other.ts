import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const CollectMethodOptionsRestCollectMethodOther = {
  Other: "other",
} as const;
export type CollectMethodOptionsRestCollectMethodOther =
  | (typeof CollectMethodOptionsRestCollectMethodOther)[keyof typeof CollectMethodOptionsRestCollectMethodOther]
  | (string & {});

export const collectMethodOptionsRestCollectMethodOtherSchema: EnumSchema<CollectMethodOptionsRestCollectMethodOther> =
  s.enumOf<CollectMethodOptionsRestCollectMethodOther>(CollectMethodOptionsRestCollectMethodOther);
