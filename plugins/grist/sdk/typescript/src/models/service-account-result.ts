import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceAccountResult = {
  id: number;
  login: string;
  label: string;
  description: string;
  expiresAt: Date;
  hasValidKey: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountResultSchema: Schema<ServiceAccountResult> = s.object<ServiceAccountResult>(
  {
    id: s.float64(),
    login: s.string(),
    label: s.string(),
    description: s.string(),
    expiresAt: s.dateTime(),
    hasValidKey: s.boolean(),
  },
  { additionalProperties: s.json() },
);
