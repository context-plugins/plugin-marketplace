import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The cloud provider associated with the commitment. */
export const CloudProvider = {
  GoogleCloud: "google-cloud",
  AmazonWebServices: "amazon-web-services",
  MicrosoftAzure: "microsoft-azure",
} as const;
export type CloudProvider = (typeof CloudProvider)[keyof typeof CloudProvider] | (string & {});

export const cloudProviderSchema: EnumSchema<CloudProvider> = s.enumOf<CloudProvider>(CloudProvider);
