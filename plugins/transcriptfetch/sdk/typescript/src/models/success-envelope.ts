import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataTranscriptfetchSystemApiInternalSchema,
  dataTranscriptfetchSystemApiSchema,
  type DataTranscriptfetchSystemApi,
} from "./unions/data-transcriptfetch-system-api.js";
import { usageSchema, type Usage } from "./usage.js";

export type SuccessEnvelope = {
  /** @default "True" */
  ok?: "True";
  requestId: string;
  data: DataTranscriptfetchSystemApi;
  usage: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const successEnvelopeProperties: s.Shape<SuccessEnvelope> = {
  ok: s.defaulted(s.literal("True"), "True"),
  requestId: s.string(),
  data: dataTranscriptfetchSystemApiInternalSchema,
  usage: usageSchema,
  _keysMap: {
    requestId: "request_id",
  },
};

export const successEnvelopeInternalSchema: Schema<SuccessEnvelope> = s.object<SuccessEnvelope>(
  successEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const successEnvelopeSchema: Schema<SuccessEnvelope> = s.lazySchema(() =>
  s.object<SuccessEnvelope>(
    {
      ...successEnvelopeProperties,
      data: dataTranscriptfetchSystemApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
