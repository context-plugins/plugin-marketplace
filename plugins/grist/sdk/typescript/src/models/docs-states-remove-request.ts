import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsStatesRemoveRequest = {
  /** The number of the latest history actions to keep */
  keep: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsStatesRemoveRequestSchema: Schema<DocsStatesRemoveRequest> =
  s.object<DocsStatesRemoveRequest>(
    {
      keep: s.int(),
    },
    { additionalProperties: s.json() },
  );
