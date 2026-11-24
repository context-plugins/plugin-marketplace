import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to
 * wait on the existing fleet instance to become available. For overflow behavior ON_DEMAND, your
 * overflow builds run on CodeBuild on-demand. If you choose to set your overflow behavior to
 * on-demand while creating a VPC-connected fleet, make sure that you add the required VPC
 * permissions to your project service role. For more information, see Example policy statement to
 * allow CodeBuild access to Amazon Web Services services required to create a VPC network
 * interface.
 */
export const OverflowBehavior = {
  Queue: "QUEUE",
  OnDemand: "ON_DEMAND",
} as const;
export type OverflowBehavior = (typeof OverflowBehavior)[keyof typeof OverflowBehavior] | (string & {});

export const overflowBehaviorSchema: EnumSchema<OverflowBehavior> =
  s.enumOf<OverflowBehavior>(OverflowBehavior);
