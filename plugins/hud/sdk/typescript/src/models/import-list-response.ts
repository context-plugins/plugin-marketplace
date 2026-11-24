import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importResponseSchema, type ImportResponse } from "./import-response.js";

export type ImportListResponse = {
  imports: ImportResponse[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importListResponseSchema: Schema<ImportListResponse> = s.object<ImportListResponse>(
  {
    imports: s.array(s.lazy(() => importResponseSchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
