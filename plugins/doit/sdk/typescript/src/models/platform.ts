import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Cloud Platform. */
export const Platform = {
  GoogleCloud: "google-cloud",
  AmazonWebServices: "amazon-web-services",
  MicrosoftAzure: "microsoft-azure",
} as const;
export type Platform = (typeof Platform)[keyof typeof Platform] | (string & {});

export const platformSchema: EnumSchema<Platform> = s.enumOf<Platform>(Platform);
