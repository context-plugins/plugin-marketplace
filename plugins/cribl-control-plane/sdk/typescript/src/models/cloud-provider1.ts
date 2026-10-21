import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud provider for the Worker Group. */
export const CloudProvider1 = {
  Aws: "aws",
  Azure: "azure",
} as const;
export type CloudProvider1 = (typeof CloudProvider1)[keyof typeof CloudProvider1] | (string & {});

export const cloudProvider1Schema: EnumSchema<CloudProvider1> = s.enumOf<CloudProvider1>(CloudProvider1);
