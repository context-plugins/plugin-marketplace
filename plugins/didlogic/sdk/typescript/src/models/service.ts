import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Service = {
  Sms: "sms",
} as const;
export type Service = (typeof Service)[keyof typeof Service] | (string & {});

export const serviceSchema: EnumSchema<Service> = s.enumOf<Service>(Service);
