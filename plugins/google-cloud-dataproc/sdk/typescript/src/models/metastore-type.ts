import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the backend metastore. */
export const MetastoreType = {
  MetastoreTypeUnspecified: "METASTORE_TYPE_UNSPECIFIED",
  Bigquery: "BIGQUERY",
  DataprocMetastore: "DATAPROC_METASTORE",
} as const;
export type MetastoreType = (typeof MetastoreType)[keyof typeof MetastoreType] | (string & {});

export const metastoreTypeSchema: EnumSchema<MetastoreType> = s.enumOf<MetastoreType>(MetastoreType);
