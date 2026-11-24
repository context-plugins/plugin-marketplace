import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The component of the Asana product the user used to trigger the story. */
export const Source = {
  Web: "web",
  Email: "email",
  Mobile: "mobile",
  Api: "api",
  Unknown: "unknown",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
