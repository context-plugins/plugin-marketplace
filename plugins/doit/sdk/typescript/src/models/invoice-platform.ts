import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Platform identifier for invoice source. */
export const InvoicePlatform = {
  GoogleCloud: "google-cloud",
  AmazonWebServices: "amazon-web-services",
  MicrosoftAzure: "microsoft-azure",
  GSuite: "g-suite",
  Office365: "office-365",
  Superquery: "superquery",
  Looker: "looker",
  Navigator: "navigator",
  Solve: "solve",
} as const;
export type InvoicePlatform = (typeof InvoicePlatform)[keyof typeof InvoicePlatform] | (string & {});

export const invoicePlatformSchema: EnumSchema<InvoicePlatform> = s.enumOf<InvoicePlatform>(InvoicePlatform);
