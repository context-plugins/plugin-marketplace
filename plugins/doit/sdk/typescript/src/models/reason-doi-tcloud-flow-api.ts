import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasonDoiTCloudFlowApi = {
  ConnectionCleared: "connection_cleared",
  DatastoreTableCleared: "datastore_table_cleared",
  PolicyCleared: "policy_cleared",
  SlackChannelCleared: "slack_channel_cleared",
} as const;
export type ReasonDoiTCloudFlowApi =
  | (typeof ReasonDoiTCloudFlowApi)[keyof typeof ReasonDoiTCloudFlowApi]
  | (string & {});

export const reasonDoiTCloudFlowApiSchema: EnumSchema<ReasonDoiTCloudFlowApi> =
  s.enumOf<ReasonDoiTCloudFlowApi>(ReasonDoiTCloudFlowApi);
