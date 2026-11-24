import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceApiAssociationConfigSchema,
  type SourceApiAssociationConfig,
} from "./source-api-association-config.js";

export type V1MergedApisSourceApiAssociationsRequest1 = {
  /** The description field. */
  description?: string;
  sourceApiAssociationConfig?: SourceApiAssociationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MergedApisSourceApiAssociationsRequest1Schema: Schema<V1MergedApisSourceApiAssociationsRequest1> =
  s.object<V1MergedApisSourceApiAssociationsRequest1>(
    {
      description: s.optional(s.string()),
      sourceApiAssociationConfig: s.optional(s.lazy(() => sourceApiAssociationConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
