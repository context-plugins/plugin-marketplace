import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  signalsMetadataResponseMetaSchema,
  type SignalsMetadataResponseMeta,
} from "./signals-metadata-response-meta.js";
import {
  signalsMetadataResponseSignalsItemsSchema,
  type SignalsMetadataResponseSignalsItems,
} from "./signals-metadata-response-signals-items.js";

export type SignalsMetadataResponse = {
  signals: SignalsMetadataResponseSignalsItems[];
  meta: SignalsMetadataResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsMetadataResponseSchema: Schema<SignalsMetadataResponse> =
  s.object<SignalsMetadataResponse>(
    {
      signals: s.array(s.lazy(() => signalsMetadataResponseSignalsItemsSchema)),
      meta: signalsMetadataResponseMetaSchema,
    },
    { additionalProperties: s.json() },
  );
