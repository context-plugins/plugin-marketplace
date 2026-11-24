import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1ArchbeePublicDocumentsApi = {
  docId?: string;
  newRecord?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1ArchbeePublicDocumentsApiSchema: Schema<Data1ArchbeePublicDocumentsApi> =
  s.object<Data1ArchbeePublicDocumentsApi>(
    {
      docId: s.optional(s.string()),
      newRecord: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
