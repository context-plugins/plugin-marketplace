import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Relationship = {
  Mother: "mother",
  Father: "father",
  MaternalGrandFather: "maternalGrandFather",
  MaternalGrandMother: "maternalGrandMother",
  PaternalGrandFather: "paternalGrandFather",
  PaternalGrandMother: "paternalGrandMother",
} as const;
export type Relationship = (typeof Relationship)[keyof typeof Relationship] | (string & {});

export const relationshipSchema: EnumSchema<Relationship> = s.enumOf<Relationship>(Relationship);
