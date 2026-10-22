import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsConfluentcloud = {
  ConfluentCloud: "confluent_cloud",
} as const;
export type TypeOptionsConfluentcloud =
  | (typeof TypeOptionsConfluentcloud)[keyof typeof TypeOptionsConfluentcloud]
  | (string & {});

export const typeOptionsConfluentcloudSchema: EnumSchema<TypeOptionsConfluentcloud> =
  s.enumOf<TypeOptionsConfluentcloud>(TypeOptionsConfluentcloud);
