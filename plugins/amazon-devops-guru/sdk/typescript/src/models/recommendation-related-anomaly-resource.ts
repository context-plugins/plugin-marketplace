import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecommendationRelatedAnomalyResource = {
  /** The name of the resource. */
  name?: string;
  /**
   * The type of the resource. Resource types take the same form that is used by Amazon Web Services
   * CloudFormation resource type identifiers, service-provider::service-name::data-type-name. For
   * example, AWS::RDS::DBCluster. For more information, see Amazon Web Services resource and
   * property types reference in the Amazon Web Services CloudFormation User Guide.
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedAnomalyResourceSchema: Schema<RecommendationRelatedAnomalyResource> =
  s.object<RecommendationRelatedAnomalyResource>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.string()),
      _keysMap: {
        name: "Name",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
