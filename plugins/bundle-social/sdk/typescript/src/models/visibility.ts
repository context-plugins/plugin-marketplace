import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Visibility = {
  Connections: "CONNECTIONS",
  Public: "PUBLIC",
  LoggedIn: "LOGGED_IN",
  Container: "CONTAINER",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility] | (string & {});

export const visibilitySchema: EnumSchema<Visibility> = s.enumOf<Visibility>(Visibility);
