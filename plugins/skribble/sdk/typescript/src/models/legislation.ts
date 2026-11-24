import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Legislation = {
  World: "WORLD",
  Ch: "CH",
  Eu: "EU",
  ChEu: "CH_EU",
} as const;
export type Legislation = (typeof Legislation)[keyof typeof Legislation] | (string & {});

export const legislationSchema: EnumSchema<Legislation> = s.enumOf<Legislation>(Legislation);
