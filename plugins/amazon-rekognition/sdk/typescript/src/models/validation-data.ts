import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

export type ValidationData = {
  /** The assets that comprise the validation data. */
  assets?: Asset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationDataSchema: Schema<ValidationData> = s.object<ValidationData>(
  {
    assets: s.optional(s.array(s.lazy(() => assetSchema))),
    _keysMap: {
      assets: "Assets",
    },
  },
  { additionalProperties: s.json() },
);
