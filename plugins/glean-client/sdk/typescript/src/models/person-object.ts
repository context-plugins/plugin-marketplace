import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PersonObject = {
  /** The display name. */
  name: string;
  /** An opaque identifier that can be used to request metadata for a Person. */
  obfuscatedId: string;
};

export const personObjectSchema: Schema<PersonObject> = s.object<PersonObject>({
  name: s.string(),
  obfuscatedId: s.string(),
});
