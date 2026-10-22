import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RootNodeConfRedisDeploymentTypeCluster = {
  /**
   * Hostname of cluster node. Must be a JavaScript expression (which can evaluate to a constant
   * value), enclosed in quotes or backticks. Can be evaluated only at init time. Example
   * referencing a Global Variable: `myBucket-${C.vars.myVar}`.
   */
  host: string;
  /** Port of cluster node */
  port: number;
};

export const rootNodeConfRedisDeploymentTypeClusterSchema: Schema<RootNodeConfRedisDeploymentTypeCluster> =
  s.object<RootNodeConfRedisDeploymentTypeCluster>({
    host: s.string(),
    port: s.float64(),
  });
