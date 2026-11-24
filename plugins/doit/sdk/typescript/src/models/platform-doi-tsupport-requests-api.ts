import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Platform of the ticket. */
export const PlatformDoiTSupportRequestsApi = {
  Doit: "doit",
  GoogleCloudPlatform: "google_cloud_platform",
  AmazonWebServices: "amazon_web_services",
  MicrosoftAzure: "microsoft_azure",
} as const;
export type PlatformDoiTSupportRequestsApi =
  | (typeof PlatformDoiTSupportRequestsApi)[keyof typeof PlatformDoiTSupportRequestsApi]
  | (string & {});

export const platformDoiTSupportRequestsApiSchema: EnumSchema<PlatformDoiTSupportRequestsApi> =
  s.enumOf<PlatformDoiTSupportRequestsApi>(PlatformDoiTSupportRequestsApi);
