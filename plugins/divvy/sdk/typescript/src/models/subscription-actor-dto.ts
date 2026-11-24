import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Subscription change actor information. */
export const SubscriptionActorDto = {
  Client: "CLIENT",
  System: "SYSTEM",
} as const;
export type SubscriptionActorDto =
  | (typeof SubscriptionActorDto)[keyof typeof SubscriptionActorDto]
  | (string & {});

export const subscriptionActorDtoSchema: EnumSchema<SubscriptionActorDto> =
  s.enumOf<SubscriptionActorDto>(SubscriptionActorDto);
