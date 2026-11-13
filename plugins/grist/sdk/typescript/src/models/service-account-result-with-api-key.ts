import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceAccountResultWithApiKey = {
  id: number;
  login: string;
  label: string;
  description: string;
  expiresAt: Date;
  hasValidKey: boolean;
  key?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountResultWithApiKeySchema: Schema<ServiceAccountResultWithApiKey> =
  s.object<ServiceAccountResultWithApiKey>(
    {
      id: s.float64(),
      login: s.string(),
      label: s.string(),
      description: s.string(),
      expiresAt: s.dateTime(),
      hasValidKey: s.boolean(),
      key: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
