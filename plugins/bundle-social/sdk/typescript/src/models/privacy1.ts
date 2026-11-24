import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy1 = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  LoggedIn: "LOGGED_IN",
  Container: "CONTAINER",
} as const;
export type Privacy1 = (typeof Privacy1)[keyof typeof Privacy1] | (string & {});

export const privacy1Schema: EnumSchema<Privacy1> = s.enumOf<Privacy1>(Privacy1);
