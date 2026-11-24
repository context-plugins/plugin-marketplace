import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type DeepcrawlStatusResponse = {
  taskId: string;
  status?: Status;
  success?: boolean;
  message?: string;
  error?: string | null;
  r2Key?: string;
  zipUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const deepcrawlStatusResponseProperties: s.Shape<DeepcrawlStatusResponse> = {
  taskId: s.string(),
  status: s.optional(s.lazy(() => statusSchema)),
  success: s.optional(s.boolean()),
  message: s.optional(s.string()),
  error: s.optionalNullable(s.string()),
  r2Key: s.optional(s.string()),
  zipUrl: s.optionalNullable(s.string()),
};

export const deepcrawlStatusResponseInternalSchema: Schema<DeepcrawlStatusResponse> =
  s.object<DeepcrawlStatusResponse>(deepcrawlStatusResponseProperties, { additionalProperties: s.json() });

export const deepcrawlStatusResponseSchema: Schema<DeepcrawlStatusResponse> = s.lazySchema(() =>
  s.object<DeepcrawlStatusResponse>(
    {
      ...deepcrawlStatusResponseProperties,
      zipUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
