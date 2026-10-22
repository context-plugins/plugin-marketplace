import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseType = {
  None: "NONE",
  Code: "CODE",
  Token: "TOKEN",
  IdToken: "ID_TOKEN",
  CodeToken: "CODE_TOKEN",
  CodeIdToken: "CODE_ID_TOKEN",
  IdTokenToken: "ID_TOKEN_TOKEN",
  CodeIdTokenToken: "CODE_ID_TOKEN_TOKEN",
} as const;
export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType] | (string & {});

export const responseTypeSchema: EnumSchema<ResponseType> = s.enumOf<ResponseType>(ResponseType);
