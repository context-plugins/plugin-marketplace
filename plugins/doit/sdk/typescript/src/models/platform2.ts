import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Ticket platform. */
export const Platform2 = {
  Doit: "doit",
  GoogleCloudPlatform: "google_cloud_platform",
  AmazonWebServices: "amazon_web_services",
  MicrosoftAzure: "microsoft_azure",
} as const;
export type Platform2 = (typeof Platform2)[keyof typeof Platform2] | (string & {});

export const platform2Schema: EnumSchema<Platform2> = s.enumOf<Platform2>(Platform2);
