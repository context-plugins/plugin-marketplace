import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelineContinueRequest = {
  /** A pipeline continuation key */
  continuationKey: string;
  /** A configuration string for the pipeline */
  configuration: string;
  /** Pipeline parameters as key-value pairs */
  parameters?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineContinueRequestSchema: Schema<PipelineContinueRequest> =
  s.object<PipelineContinueRequest>(
    {
      continuationKey: s.string(),
      configuration: s.string(),
      parameters: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        continuationKey: "continuation-key",
      },
    },
    { additionalProperties: s.json() },
  );
