import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleSchema, type SamplingRule } from "./sampling-rule.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateSamplingRuleRequest = {
  samplingRule: SamplingRule;
  /**
   * A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule.
   * For more information about ways to use tags, see Tagging Amazon Web Services resources in the
   * Amazon Web Services General Reference. The following restrictions apply to tags: Maximum number
   * of user-applied tags per resource: 50 Maximum tag key length: 128 Unicode characters Maximum
   * tag value length: 256 Unicode characters Valid values for key and value: a-z, A-Z, 0-9, space,
   * and the following characters: _ . : / = + - and \@ Tag keys and values are case sensitive.
   * Don't use aws: as a prefix for keys; it
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSamplingRuleRequestSchema: Schema<CreateSamplingRuleRequest> =
  s.object<CreateSamplingRuleRequest>(
    {
      samplingRule: samplingRuleSchema,
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        samplingRule: "SamplingRule",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
