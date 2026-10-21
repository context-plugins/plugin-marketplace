import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of application. Default: <code>server</code> */
export const ApplicationKind = {
  Server: "server",
  Browser: "browser",
  Mobile: "mobile",
} as const;
export type ApplicationKind = (typeof ApplicationKind)[keyof typeof ApplicationKind] | (string & {});

export const applicationKindSchema: EnumSchema<ApplicationKind> = s.enumOf<ApplicationKind>(ApplicationKind);
