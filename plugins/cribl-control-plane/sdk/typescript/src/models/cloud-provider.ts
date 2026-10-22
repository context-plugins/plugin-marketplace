import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CloudProvider = {
  Aws: "aws",
  Azure: "azure",
} as const;
export type CloudProvider = (typeof CloudProvider)[keyof typeof CloudProvider] | (string & {});

export const cloudProviderSchema: EnumSchema<CloudProvider> = s.enumOf<CloudProvider>(CloudProvider);
