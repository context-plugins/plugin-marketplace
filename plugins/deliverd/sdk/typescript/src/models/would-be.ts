import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WouldBe = {
  Allow: "allow",
  Redact: "redact",
  Ask: "ask",
  Deny: "deny",
} as const;
export type WouldBe = (typeof WouldBe)[keyof typeof WouldBe] | (string & {});

export const wouldBeSchema: EnumSchema<WouldBe> = s.enumOf<WouldBe>(WouldBe);
