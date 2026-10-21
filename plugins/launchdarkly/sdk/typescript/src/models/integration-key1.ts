import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The integration key */
export const IntegrationKey1 = {
  Split: "split",
  Unleash: "unleash",
} as const;
export type IntegrationKey1 = (typeof IntegrationKey1)[keyof typeof IntegrationKey1] | (string & {});

export const integrationKey1Schema: EnumSchema<IntegrationKey1> = s.enumOf<IntegrationKey1>(IntegrationKey1);
