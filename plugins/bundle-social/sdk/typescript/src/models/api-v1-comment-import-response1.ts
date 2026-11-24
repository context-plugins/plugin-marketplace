import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importSchema, type Import } from "./import.js";

export type ApiV1CommentImportResponse1 = {
  imports: Import[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentImportResponse1Schema: Schema<ApiV1CommentImportResponse1> =
  s.object<ApiV1CommentImportResponse1>(
    {
      imports: s.array(s.lazy(() => importSchema)),
    },
    { additionalProperties: s.json() },
  );
