import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the resiliency group. The valid values are pending, available, deleting, and
 * deleted.
 */
export const StateAwsDirectConnectResiliencyGroupApi = {
  Pending: "pending",
  Available: "available",
  Deleting: "deleting",
  Deleted: "deleted",
} as const;
export type StateAwsDirectConnectResiliencyGroupApi =
  | (typeof StateAwsDirectConnectResiliencyGroupApi)[keyof typeof StateAwsDirectConnectResiliencyGroupApi]
  | (string & {});

export const stateAwsDirectConnectResiliencyGroupApiSchema: EnumSchema<StateAwsDirectConnectResiliencyGroupApi> =
  s.enumOf<StateAwsDirectConnectResiliencyGroupApi>(StateAwsDirectConnectResiliencyGroupApi);
