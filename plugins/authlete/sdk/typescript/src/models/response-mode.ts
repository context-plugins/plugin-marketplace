import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseMode = {
  Query: "QUERY",
  Fragment: "FRAGMENT",
  FormPost: "FORM_POST",
  Jwt: "JWT",
  QueryJwt: "QUERY_JWT",
  FragmentJwt: "FRAGMENT_JWT",
  FormPostJwt: "FORM_POST_JWT",
} as const;
export type ResponseMode = (typeof ResponseMode)[keyof typeof ResponseMode] | (string & {});

export const responseModeSchema: EnumSchema<ResponseMode> = s.enumOf<ResponseMode>(ResponseMode);
