import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtractRequest = {
  url: string;
  prompt?: string;
  responseFormat?: Record<string, unknown>;
};

const extractRequestProperties: s.Shape<ExtractRequest> = {
  url: s.string(),
  prompt: s.optional(s.string()),
  responseFormat: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    responseFormat: "response_format",
  },
};

export const extractRequestInternalSchema: Schema<ExtractRequest> =
  s.object<ExtractRequest>(extractRequestProperties);

export const extractRequestSchema: Schema<ExtractRequest> = s.lazySchema(() =>
  s.object<ExtractRequest>({
    ...extractRequestProperties,
    url: s.string().check(s.url()),
  }),
);
