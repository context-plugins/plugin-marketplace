import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsKinesis = {
  Kinesis: "kinesis",
} as const;
export type TypeOptionsKinesis = (typeof TypeOptionsKinesis)[keyof typeof TypeOptionsKinesis] | (string & {});

export const typeOptionsKinesisSchema: EnumSchema<TypeOptionsKinesis> =
  s.enumOf<TypeOptionsKinesis>(TypeOptionsKinesis);
