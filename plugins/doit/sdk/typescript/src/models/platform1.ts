import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The cloud platform. */
export const Platform1 = {
  GoogleCloud: "google-cloud",
  AmazonWebServices: "amazon-web-services",
} as const;
export type Platform1 = (typeof Platform1)[keyof typeof Platform1] | (string & {});

export const platform1Schema: EnumSchema<Platform1> = s.enumOf<Platform1>(Platform1);
