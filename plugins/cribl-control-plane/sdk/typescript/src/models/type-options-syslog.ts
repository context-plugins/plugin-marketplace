import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsSyslog = {
  Syslog: "syslog",
} as const;
export type TypeOptionsSyslog = (typeof TypeOptionsSyslog)[keyof typeof TypeOptionsSyslog] | (string & {});

export const typeOptionsSyslogSchema: EnumSchema<TypeOptionsSyslog> =
  s.enumOf<TypeOptionsSyslog>(TypeOptionsSyslog);
