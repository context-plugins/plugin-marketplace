import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The visibility of the team to users in the same organization */
export const Visibility = {
  Secret: "secret",
  RequestToJoin: "request_to_join",
  Public: "public",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility] | (string & {});

export const visibilitySchema: EnumSchema<Visibility> = s.enumOf<Visibility>(Visibility);
