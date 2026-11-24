import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intendedResiliencyModelSchema, type IntendedResiliencyModel } from "./intended-resiliency-model.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateResiliencyGroupRequest = {
  /** The name of the resiliency group. */
  resiliencyGroupName: string;
  /**
   * The resiliency model that the resiliency group is intended to meet. The valid values are
   * maximum-resiliency, high-resiliency, and basic-resiliency.
   */
  intendedResiliencyModel: IntendedResiliencyModel;
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   */
  clientToken?: string;
  /** The tags to associate with the resiliency group. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResiliencyGroupRequestSchema: Schema<CreateResiliencyGroupRequest> =
  s.object<CreateResiliencyGroupRequest>(
    {
      resiliencyGroupName: s.string(),
      intendedResiliencyModel: intendedResiliencyModelSchema,
      clientToken: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
    },
    { additionalProperties: s.json() },
  );
