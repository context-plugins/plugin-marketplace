import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The automated advertisement kind to fill at publish time. */
export const AutomatedAdvertisementKind2 = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type AutomatedAdvertisementKind2 =
  | (typeof AutomatedAdvertisementKind2)[keyof typeof AutomatedAdvertisementKind2]
  | (string & {});

export const automatedAdvertisementKind2Schema: EnumSchema<AutomatedAdvertisementKind2> =
  s.enumOf<AutomatedAdvertisementKind2>(AutomatedAdvertisementKind2);
