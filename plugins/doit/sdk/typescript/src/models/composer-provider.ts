import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud provider or platform, using the Console's provider names. */
export const ComposerProvider = {
  Aws: "aws",
  Azure: "azure",
  AzureAd: "azure_ad",
  Gcp: "gcp",
  General: "general",
  GoogleCloudSource: "google_cloud_source",
  GoogleWorkspace: "google_workspace",
  K8S: "k8s",
  Oci: "oci",
  Vmware: "vmware",
} as const;
export type ComposerProvider = (typeof ComposerProvider)[keyof typeof ComposerProvider] | (string & {});

export const composerProviderSchema: EnumSchema<ComposerProvider> =
  s.enumOf<ComposerProvider>(ComposerProvider);
