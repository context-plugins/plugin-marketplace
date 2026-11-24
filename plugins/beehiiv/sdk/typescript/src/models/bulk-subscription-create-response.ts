import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The response containing the import ID */
export type BulkSubscriptionCreateResponse = {
  /** The result of the create request */
  message: string;
  /** The database ID of the import object created from the Bulk Subscription Create request */
  importId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSubscriptionCreateResponseSchema: Schema<BulkSubscriptionCreateResponse> =
  s.object<BulkSubscriptionCreateResponse>(
    {
      message: s.string(),
      importId: s.string(),
      _keysMap: {
        importId: "import_id",
      },
    },
    { additionalProperties: s.json() },
  );
