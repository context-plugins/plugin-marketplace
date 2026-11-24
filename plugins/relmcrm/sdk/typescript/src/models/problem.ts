import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * RFC-9457 error. Closed-set rejections carry valid_options + suggestion so an agent self-corrects.
 */
export type Problem = {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  code?: string;
  field?: string;
  validOptions?: string[];
  suggestion?: string;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const problemProperties: s.Shape<Problem> = {
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.int()),
  detail: s.optional(s.string()),
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  validOptions: s.optional(s.array(s.string())),
  suggestion: s.optional(s.string()),
  requestId: s.optional(s.string()),
  _keysMap: {
    validOptions: "valid_options",
    requestId: "request_id",
  },
};

export const problemInternalSchema: Schema<Problem> = s.object<Problem>(problemProperties, {
  additionalProperties: s.json(),
});

export const problemSchema: Schema<Problem> = s.lazySchema(() =>
  s.object<Problem>(
    {
      ...problemProperties,
      type: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
