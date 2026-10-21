import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The integration key */
export const IntegrationKey = {
  Redis: "redis",
  Dynamodb: "dynamodb",
} as const;
export type IntegrationKey = (typeof IntegrationKey)[keyof typeof IntegrationKey] | (string & {});

export const integrationKeySchema: EnumSchema<IntegrationKey> = s.enumOf<IntegrationKey>(IntegrationKey);
