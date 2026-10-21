import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AWS instance metadata collected from the node. */
export type AwsTypeHeartbeatMetadata1 = {
  /**
   * If <code>true</code>, the AWS metadata collector is enabled on the node. Otherwise,
   * <code>false</code>.
   */
  enabled: boolean;
  /** AWS EC2 instance ID. */
  instanceId: string;
  /** AWS region name. */
  region: string;
  /** AWS EC2 instance tags, if available. */
  tags?: Record<string, string>;
  /** AWS EC2 instance type. */
  type: string;
  /** AWS availability zone name. */
  zone: string;
};

export const awsTypeHeartbeatMetadata1Schema: Schema<AwsTypeHeartbeatMetadata1> =
  s.object<AwsTypeHeartbeatMetadata1>({
    enabled: s.boolean(),
    instanceId: s.string(),
    region: s.string(),
    tags: s.optional(s.record(s.string(), s.string())),
    type: s.string(),
    zone: s.string(),
  });
