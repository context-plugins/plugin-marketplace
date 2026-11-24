import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudflowImportCreatedResource = {
  key: string;
  id: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowImportCreatedResourceSchema: Schema<CloudflowImportCreatedResource> =
  s.object<CloudflowImportCreatedResource>(
    {
      key: s.string(),
      id: s.string(),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
