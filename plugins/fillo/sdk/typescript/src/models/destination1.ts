import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Destination1 = {
  Gdrive: "gdrive",
  Box: "box",
  S3: "s3",
  R2: "r2",
  Transit: "transit",
  None: "none",
} as const;
export type Destination1 = (typeof Destination1)[keyof typeof Destination1] | (string & {});

export const destination1Schema: EnumSchema<Destination1> = s.enumOf<Destination1>(Destination1);
