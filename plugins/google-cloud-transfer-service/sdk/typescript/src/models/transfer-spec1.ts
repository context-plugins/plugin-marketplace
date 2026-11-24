import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { awsS3CompatibleData1Schema, type AwsS3CompatibleData1 } from "./aws-s3-compatible-data1.js";
import { awsS3Data2Schema, type AwsS3Data2 } from "./aws-s3-data2.js";
import { azureBlobStorageData2Schema, type AzureBlobStorageData2 } from "./azure-blob-storage-data2.js";
import { gcsData1Schema, type GcsData1 } from "./gcs-data1.js";
import { gcsData2Schema, type GcsData2 } from "./gcs-data2.js";
import { gcsData6Schema, type GcsData6 } from "./gcs-data6.js";
import { hdfsData2Schema, type HdfsData2 } from "./hdfs-data2.js";
import { httpData2Schema, type HttpData2 } from "./http-data2.js";
import { objectConditions3Schema, type ObjectConditions3 } from "./object-conditions3.js";
import { posixFilesystem1Schema, type PosixFilesystem1 } from "./posix-filesystem1.js";
import { posixFilesystem3Schema, type PosixFilesystem3 } from "./posix-filesystem3.js";
import { transferManifest2Schema, type TransferManifest2 } from "./transfer-manifest2.js";
import { transferOptions3Schema, type TransferOptions3 } from "./transfer-options3.js";

/** Transfer specification. */
export type TransferSpec1 = {
  /** Optional. An HDFS cluster data source. */
  hdfsDataSource?: HdfsData2;
  /**
   * Only objects that satisfy these object conditions are included in the set of data source and
   * data sink objects. Object conditions based on objects' "last modification time" do not exclude
   * objects in a data sink.
   */
  objectConditions?: ObjectConditions3;
  /** Optional. A Cloud Storage data source. */
  gcsDataSource?: GcsData6;
  /** Optional. A Cloud Storage data sink. */
  gcsDataSink?: GcsData1;
  /** Optional. An HTTP URL data source. */
  httpDataSource?: HttpData2;
  /** Optional. An AWS S3 data source. */
  awsS3DataSource?: AwsS3Data2;
  /**
   * If the option delete_objects_unique_in_sink is `true` and time-based object conditions such as
   * 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.
   */
  transferOptions?: TransferOptions3;
  /** Optional. A POSIX Filesystem data sink. */
  posixDataSink?: PosixFilesystem3;
  /** Optional. An Azure Blob Storage data source. */
  azureBlobStorageDataSource?: AzureBlobStorageData2;
  /**
   * Specifies the agent pool name associated with the posix data source. When unspecified, the
   * default name is used.
   */
  sourceAgentPoolName?: string;
  /** Optional. An AWS S3 compatible data source. */
  awsS3CompatibleDataSource?: AwsS3CompatibleData1;
  /** Optional. A POSIX Filesystem data source. */
  posixDataSource?: PosixFilesystem1;
  /**
   * For transfers between file systems, specifies a Cloud Storage bucket to be used as an
   * intermediate location through which to transfer data. See [Transfer data between file
   * systems](https://cloud.google.com/storage-transfer/docs/file-to-file) for more information.
   */
  gcsIntermediateDataLocation?: GcsData2;
  /**
   * A manifest file provides a list of objects to be transferred from the data source. This field
   * points to the location of the manifest file. Otherwise, the entire source bucket is used.
   * ObjectConditions still apply.
   */
  transferManifest?: TransferManifest2;
  /**
   * Specifies the agent pool name associated with the posix data sink. When unspecified, the
   * default name is used.
   */
  sinkAgentPoolName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferSpec1Schema: Schema<TransferSpec1> = s.object<TransferSpec1>(
  {
    hdfsDataSource: s.optional(s.lazy(() => hdfsData2Schema)),
    objectConditions: s.optional(s.lazy(() => objectConditions3Schema)),
    gcsDataSource: s.optional(s.lazy(() => gcsData6Schema)),
    gcsDataSink: s.optional(s.lazy(() => gcsData1Schema)),
    httpDataSource: s.optional(s.lazy(() => httpData2Schema)),
    awsS3DataSource: s.optional(s.lazy(() => awsS3Data2Schema)),
    transferOptions: s.optional(s.lazy(() => transferOptions3Schema)),
    posixDataSink: s.optional(s.lazy(() => posixFilesystem3Schema)),
    azureBlobStorageDataSource: s.optional(s.lazy(() => azureBlobStorageData2Schema)),
    sourceAgentPoolName: s.optional(s.string()),
    awsS3CompatibleDataSource: s.optional(s.lazy(() => awsS3CompatibleData1Schema)),
    posixDataSource: s.optional(s.lazy(() => posixFilesystem1Schema)),
    gcsIntermediateDataLocation: s.optional(s.lazy(() => gcsData2Schema)),
    transferManifest: s.optional(s.lazy(() => transferManifest2Schema)),
    sinkAgentPoolName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
