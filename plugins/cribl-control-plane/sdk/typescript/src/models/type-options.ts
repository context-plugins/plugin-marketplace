import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptions = {
  Kafka: "kafka",
} as const;
export type TypeOptions = (typeof TypeOptions)[keyof typeof TypeOptions] | (string & {});

export const typeOptionsSchema: EnumSchema<TypeOptions> = s.enumOf<TypeOptions>(TypeOptions);
