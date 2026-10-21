import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsSnmp = {
  Snmp: "snmp",
} as const;
export type TypeOptionsSnmp = (typeof TypeOptionsSnmp)[keyof typeof TypeOptionsSnmp] | (string & {});

export const typeOptionsSnmpSchema: EnumSchema<TypeOptionsSnmp> = s.enumOf<TypeOptionsSnmp>(TypeOptionsSnmp);
