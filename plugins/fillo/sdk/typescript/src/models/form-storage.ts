import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  destinationFilloSoStorageApiSchema,
  type DestinationFilloSoStorageApi,
} from "./destination-fillo-so-storage-api.js";
import { resolvedSchema, type Resolved } from "./resolved.js";

export type FormStorage = {
  /** The destination pinned on the form. `none` means the form follows the workspace default. */
  destination: DestinationFilloSoStorageApi;
  /**
   * The stored destination record: provider (gdrive, box, or s3), an optional r2 variant, and any
   * selected Drive folder.
   */
  storage: Record<string, unknown> | null;
  /**
   * Where an upload would actually land right now — including Fillo's short-lived transit staging.
   * null means uploads are blocked.
   */
  resolved: Resolved | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formStorageSchema: Schema<FormStorage> = s.object<FormStorage>(
  {
    destination: destinationFilloSoStorageApiSchema,
    storage: s.nullable(s.record(s.string(), s.unknown())),
    resolved: s.nullable(s.lazy(() => resolvedSchema)),
  },
  { additionalProperties: s.json() },
);
