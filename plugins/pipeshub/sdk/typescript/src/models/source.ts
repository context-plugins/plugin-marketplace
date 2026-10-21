import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Origin of the feedback. Always present in responses (server applies the default `user`). */
export const Source = {
  User: "user",
  System: "system",
  Admin: "admin",
  Auto: "auto",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
