import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** To distinguish the kind of application */
export const Kind = {
  Browser: "browser",
  Mobile: "mobile",
  Server: "server",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
