import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesOutputFormatSchema, type MessagesOutputFormat } from "../messages-output-format.js";

/** Structured output settings. Currently supports only `json_schema`. */
export type Format = MessagesOutputFormat;

export const formatSchema: Schema<Format> = s.of<Format>(s.union([s.lazy(() => messagesOutputFormatSchema)]));
