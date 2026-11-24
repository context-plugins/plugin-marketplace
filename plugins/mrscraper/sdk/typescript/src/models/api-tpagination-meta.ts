import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiTPaginationMeta = {
  page?: number;
  pageSize?: number;
  total?: number;
  totalPage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiTPaginationMetaSchema: Schema<ApiTPaginationMeta> = s.object<ApiTPaginationMeta>(
  {
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    total: s.optional(s.int()),
    totalPage: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
