import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responseFormatJsonObjectSchema,
  type ResponseFormatJsonObject,
} from "../response-format-json-object.js";
import {
  responseFormatTextJsonSchemaConfigSchema,
  type ResponseFormatTextJsonSchemaConfig,
} from "../response-format-text-json-schema-config.js";
import { responseFormatTextSchema, type ResponseFormatText } from "../response-format-text.js";

export type Format = ResponseFormatText | ResponseFormatTextJsonSchemaConfig | ResponseFormatJsonObject;

export const formatSchema: Schema<Format> = s.of<Format>(
  s.union([
    s.lazy(() => responseFormatTextSchema),
    s.lazy(() => responseFormatTextJsonSchemaConfigSchema),
    s.lazy(() => responseFormatJsonObjectSchema),
  ]),
);
