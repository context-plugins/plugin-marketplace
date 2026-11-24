import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metadataOptions2Schema, type MetadataOptions2 } from "./metadata-options2.js";
import { overwriteWhenSchema, type OverwriteWhen } from "./overwrite-when.js";

/**
 * Specifies the metadata options to be applied during replication. Delete options are not
 * supported. If a delete option is specified, the request fails with an INVALID_ARGUMENT error.
 */
export type TransferOptions1 = {
  /** Represents the selected metadata options for a transfer job. */
  metadataOptions?: MetadataOptions2;
  /**
   * When to overwrite objects that already exist in the sink. The default is that only objects that
   * are different from the source are overwritten. If true, all objects in the sink whose name
   * matches an object in the source are overwritten with the source object.
   */
  overwriteObjectsAlreadyExistingInSink?: boolean;
  /**
   * Whether objects that exist only in the sink should be deleted from the sink. **Note:** This
   * option and delete_objects_from_source_after_transfer are mutually exclusive.
   */
  deleteObjectsUniqueInSink?: boolean;
  /**
   * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is
   * determined by overwrite_objects_already_existing_in_sink.
   */
  overwriteWhen?: OverwriteWhen;
  /**
   * Whether objects should be deleted from the source after they are transferred to the sink.
   * **Note:** This option and delete_objects_unique_in_sink are mutually exclusive.
   */
  deleteObjectsFromSourceAfterTransfer?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferOptions1Schema: Schema<TransferOptions1> = s.object<TransferOptions1>(
  {
    metadataOptions: s.optional(s.lazy(() => metadataOptions2Schema)),
    overwriteObjectsAlreadyExistingInSink: s.optional(s.boolean()),
    deleteObjectsUniqueInSink: s.optional(s.boolean()),
    overwriteWhen: s.optional(s.lazy(() => overwriteWhenSchema)),
    deleteObjectsFromSourceAfterTransfer: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
