import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComBulkDeliveryApi = {
  /** Stable key to pass as `dataset` when requesting a delivery. */
  datasetKey?: string;
  /** Dataset name, for display. */
  label?: string;
  /** What the dataset contains. */
  description?: string;
  /** Scopes a key must carry to request it. */
  requiredScopes?: string[];
  /** Plan feature the dataset sits behind. */
  requiredFeature?: string;
  /** Whether the dataset can be delivered as a full snapshot. */
  supportsSnapshot?: boolean;
  /** Whether the key on this request may request it, resolved at request time. */
  availableToYou?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComBulkDeliveryApiSchema: Schema<DatumCommonelementsComBulkDeliveryApi> =
  s.object<DatumCommonelementsComBulkDeliveryApi>(
    {
      datasetKey: s.optional(s.string()),
      label: s.optional(s.string()),
      description: s.optional(s.string()),
      requiredScopes: s.optional(s.array(s.string())),
      requiredFeature: s.optional(s.string()),
      supportsSnapshot: s.optional(s.boolean()),
      availableToYou: s.optional(s.boolean()),
      _keysMap: {
        datasetKey: "dataset_key",
        requiredScopes: "required_scopes",
        requiredFeature: "required_feature",
        supportsSnapshot: "supports_snapshot",
        availableToYou: "available_to_you",
      },
    },
    { additionalProperties: s.json() },
  );
