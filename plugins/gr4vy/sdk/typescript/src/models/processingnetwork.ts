import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Processingnetwork = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Discover: "DISCOVER",
} as const;
export type Processingnetwork = (typeof Processingnetwork)[keyof typeof Processingnetwork] | (string & {});

export const processingnetworkSchema: EnumSchema<Processingnetwork> =
  s.enumOf<Processingnetwork>(Processingnetwork);
