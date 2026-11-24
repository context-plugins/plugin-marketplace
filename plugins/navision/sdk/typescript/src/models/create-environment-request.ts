import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentTypeSchema, type EnvironmentType } from "./environment-type.js";

export type CreateEnvironmentRequest = {
  /** Type of environment to create */
  environmentType: EnvironmentType;
  /** Country to create the environment within */
  countryCode: string;
  /** Logical ring group (only Sandbox may be created in Preview ring) */
  ringName?: string;
  /** Application version (e.g., 26.0.0.0) */
  applicationVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEnvironmentRequestSchema: Schema<CreateEnvironmentRequest> =
  s.object<CreateEnvironmentRequest>(
    {
      environmentType: environmentTypeSchema,
      countryCode: s.string(),
      ringName: s.optional(s.string()),
      applicationVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
