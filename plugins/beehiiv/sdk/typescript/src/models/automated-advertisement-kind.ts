import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomatedAdvertisementKind = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type AutomatedAdvertisementKind =
  | (typeof AutomatedAdvertisementKind)[keyof typeof AutomatedAdvertisementKind]
  | (string & {});

export const automatedAdvertisementKindSchema: EnumSchema<AutomatedAdvertisementKind> =
  s.enumOf<AutomatedAdvertisementKind>(AutomatedAdvertisementKind);
