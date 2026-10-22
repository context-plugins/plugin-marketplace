import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Relationship = {
  Owner: "OWNER",
  Writer: "WRITER",
  Reader: "READER",
} as const;
export type Relationship = (typeof Relationship)[keyof typeof Relationship] | (string & {});

export const relationshipSchema: EnumSchema<Relationship> = s.enumOf<Relationship>(Relationship);
