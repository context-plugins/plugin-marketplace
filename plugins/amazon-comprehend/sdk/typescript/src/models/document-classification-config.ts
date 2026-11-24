import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mode1Schema, type Mode1 } from "./mode1.js";

export type DocumentClassificationConfig = {
  /** Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL. */
  mode: Mode1;
  /** One or more labels to associate with the custom classifier. */
  labels?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassificationConfigSchema: Schema<DocumentClassificationConfig> =
  s.object<DocumentClassificationConfig>(
    {
      mode: mode1Schema,
      labels: s.optional(s.array(s.string())),
      _keysMap: {
        mode: "Mode",
        labels: "Labels",
      },
    },
    { additionalProperties: s.json() },
  );
