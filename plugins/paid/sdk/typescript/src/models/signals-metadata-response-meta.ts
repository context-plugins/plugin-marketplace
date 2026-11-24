import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignalsMetadataResponseMeta = {
  fromDate: string;
  toDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsMetadataResponseMetaSchema: Schema<SignalsMetadataResponseMeta> =
  s.object<SignalsMetadataResponseMeta>(
    {
      fromDate: s.string(),
      toDate: s.string(),
    },
    { additionalProperties: s.json() },
  );
