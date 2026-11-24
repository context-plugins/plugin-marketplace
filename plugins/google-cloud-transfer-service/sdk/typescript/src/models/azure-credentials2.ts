import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. Input only. Credentials used to authenticate API requests to Azure. For information on
 * our data retention policy for user credentials, see [User
 * credentials](/storage-transfer/docs/data-retention#user-credentials).
 */
export type AzureCredentials2 = {
  /**
   * Required. Azure shared access signature (SAS). For more information about SAS, see [Grant
   * limited access to Azure Storage resources using shared access signatures
   * (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).
   */
  sasToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const azureCredentials2Schema: Schema<AzureCredentials2> = s.object<AzureCredentials2>(
  {
    sasToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
