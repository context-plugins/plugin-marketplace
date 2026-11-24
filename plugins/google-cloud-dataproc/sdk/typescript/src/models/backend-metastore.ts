import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metastoreTypeSchema, type MetastoreType } from "./metastore-type.js";

/** Represents a backend metastore for the federation. */
export type BackendMetastore = {
  /**
   * The relative resource name of the metastore that is being federated. The formats of the
   * relative resource names for the currently supported metastores are listed below: BigQuery
   * projects/{project_id} Dataproc Metastore
   * projects/{project_id}/locations/{location}/services/{service_id}
   */
  name?: string;
  /** The type of the backend metastore. */
  metastoreType?: MetastoreType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backendMetastoreSchema: Schema<BackendMetastore> = s.object<BackendMetastore>(
  {
    name: s.optional(s.string()),
    metastoreType: s.optional(s.lazy(() => metastoreTypeSchema)),
  },
  { additionalProperties: s.json() },
);
