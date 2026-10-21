import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Wiz log source type. Select a predefined type or enter a custom value. */
export const WizDefendSourceType = {
  AwsCloudtrail: "AWS_CLOUDTRAIL",
  AwsEksAuditLogs: "AWS_EKS_AUDIT_LOGS",
  AwsResolverQueryLogs: "AWS_RESOLVER_QUERY_LOGS",
  AzureActivityLogs: "AZURE_ACTIVITY_LOGS",
  MicrosoftEntraIdAuditLogs: "MICROSOFT_ENTRA_ID_AUDIT_LOGS",
  GcpAuditLogs: "GCP_AUDIT_LOGS",
  GithubAuditLogs: "GITHUB_AUDIT_LOGS",
  OciAuditLogs: "OCI_AUDIT_LOGS",
  AwsVpcFlowLogs: "AWS_VPC_FLOW_LOGS",
} as const;
export type WizDefendSourceType =
  | (typeof WizDefendSourceType)[keyof typeof WizDefendSourceType]
  | (string & {});

export const wizDefendSourceTypeSchema: EnumSchema<WizDefendSourceType> =
  s.enumOf<WizDefendSourceType>(WizDefendSourceType);
