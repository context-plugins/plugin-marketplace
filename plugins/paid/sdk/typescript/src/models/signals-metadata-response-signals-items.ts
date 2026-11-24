import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  signalsMetadataResponseSignalsItemsPathsItemsSchema,
  type SignalsMetadataResponseSignalsItemsPathsItems,
} from "./signals-metadata-response-signals-items-paths-items.js";

export type SignalsMetadataResponseSignalsItems = {
  signalName: string;
  paths: SignalsMetadataResponseSignalsItemsPathsItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsMetadataResponseSignalsItemsSchema: Schema<SignalsMetadataResponseSignalsItems> =
  s.object<SignalsMetadataResponseSignalsItems>(
    {
      signalName: s.string(),
      paths: s.array(s.lazy(() => signalsMetadataResponseSignalsItemsPathsItemsSchema)),
    },
    { additionalProperties: s.json() },
  );
