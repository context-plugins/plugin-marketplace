import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainSchema, type Domain } from "./domain.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateDatasetGroupRequest = {
  /** A name for the dataset group. */
  datasetGroupName: string;
  /**
   * The domain associated with the dataset group. When you add a dataset to a dataset group, this
   * value and the value specified for the Domain parameter of the CreateDataset operation must
   * match. The Domain and DatasetType that you choose determine the fields that must be present in
   * training data that you import to a dataset. For example, if you choose the RETAIL domain and
   * TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id, timestamp, and
   * demand fields are present in your data. For more information, see Dataset groups.
   */
  domain: Domain;
  /**
   * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the
   * dataset group.
   */
  datasetArns?: string[];
  /**
   * The optional metadata that you apply to the dataset group to help you categorize and organize
   * them. Each tag consists of a key and an optional value, both of which you define. The following
   * basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource,
   * each tag key must be unique, and each tag key can have only one value. Maximum key length - 128
   * Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your
   * tagging schema is used across multiple services and resources, remember that other services may
   * have restrictions on allowed c
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetGroupRequestSchema: Schema<CreateDatasetGroupRequest> =
  s.object<CreateDatasetGroupRequest>(
    {
      datasetGroupName: s.string(),
      domain: domainSchema,
      datasetArns: s.optional(s.array(s.string())),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        datasetGroupName: "DatasetGroupName",
        domain: "Domain",
        datasetArns: "DatasetArns",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
