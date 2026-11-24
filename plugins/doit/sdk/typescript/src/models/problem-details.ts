import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailInternalSchema, detailSchema, type Detail } from "./detail.js";

/** RFC 9457 Problem Details — standard DoiT error envelope for all non-2xx responses. */
export type ProblemDetails = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  code: string;
  retryable: boolean;
  details?: Detail[];
  docsUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const problemDetailsProperties: s.Shape<ProblemDetails> = {
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.string(),
  instance: s.string(),
  code: s.string(),
  retryable: s.boolean(),
  details: s.optional(s.array(s.lazy(() => detailInternalSchema))),
  docsUrl: s.optionalNullable(s.string()),
};

export const problemDetailsInternalSchema: Schema<ProblemDetails> = s.object<ProblemDetails>(
  problemDetailsProperties,
  { additionalProperties: s.json() },
);

export const problemDetailsSchema: Schema<ProblemDetails> = s.lazySchema(() =>
  s.object<ProblemDetails>(
    {
      ...problemDetailsProperties,
      type: s.string().check(s.url()),
      instance: s.string().check(s.url()),
      code: s
        .string()
        .check(s.pattern("^([a-z][a-z0-9_]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*\\.[a-z][a-z0-9_]*)$")),
      details: s.optional(s.array(s.lazy(() => detailSchema))),
      docsUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
