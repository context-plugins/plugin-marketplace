import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Protocol4 = {
  Grpc: "grpc",
} as const;
export type Protocol4 = (typeof Protocol4)[keyof typeof Protocol4] | (string & {});

export const protocol4Schema: EnumSchema<Protocol4> = s.enumOf<Protocol4>(Protocol4);
