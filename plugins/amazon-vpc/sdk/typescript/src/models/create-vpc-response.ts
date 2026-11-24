import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vpcSchema, type Vpc } from "./vpc.js";

/** Response from the CreateVpc action */
export type CreateVpcResponse = {
  /** Describes a VPC */
  vpc?: Vpc;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createVpcResponseSchema: Schema<CreateVpcResponse> = s.object<CreateVpcResponse>(
  {
    vpc: s.optional(s.lazy(() => vpcSchema)),
  },
  { additionalProperties: s.json() },
);
