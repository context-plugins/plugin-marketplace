import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Choose Auto to use IAM roles */
export const SqsAuthenticationMethod = {
  Auto: "auto",
  Secret: "secret",
} as const;
export type SqsAuthenticationMethod =
  | (typeof SqsAuthenticationMethod)[keyof typeof SqsAuthenticationMethod]
  | (string & {});

export const sqsAuthenticationMethodSchema: EnumSchema<SqsAuthenticationMethod> =
  s.enumOf<SqsAuthenticationMethod>(SqsAuthenticationMethod);
