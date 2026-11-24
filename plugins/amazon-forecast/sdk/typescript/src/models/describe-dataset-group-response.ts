import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domain1Schema, type Domain1 } from "./domain1.js";

export type DescribeDatasetGroupResponse = {
  /** The name of the dataset group. */
  datasetGroupName?: string;
  /** The ARN of the dataset group. */
  datasetGroupArn?: string;
  /** An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group. */
  datasetArns?: string[];
  /** The domain associated with the dataset group. */
  domain?: Domain1;
  /**
   * The status of the dataset group. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING,
   * UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply when you call the UpdateDatasetGroup
   * operation. The Status of the dataset group must be ACTIVE before you can use the dataset group
   * to create a predictor.
   */
  status?: string;
  /** When the dataset group was created. */
  creationTime?: Date;
  /**
   * When the dataset group was created or last updated from a call to the UpdateDatasetGroup
   * operation. While the dataset group is being updated, LastModificationTime is the current time
   * of the DescribeDatasetGroup call.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetGroupResponseSchema: Schema<DescribeDatasetGroupResponse> =
  s.object<DescribeDatasetGroupResponse>(
    {
      datasetGroupName: s.optional(s.string()),
      datasetGroupArn: s.optional(s.string()),
      datasetArns: s.optional(s.array(s.string())),
      domain: s.optional(s.lazy(() => domain1Schema)),
      status: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        datasetGroupName: "DatasetGroupName",
        datasetGroupArn: "DatasetGroupArn",
        datasetArns: "DatasetArns",
        domain: "Domain",
        status: "Status",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
