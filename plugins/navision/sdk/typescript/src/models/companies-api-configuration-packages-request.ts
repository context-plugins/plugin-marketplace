import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesApiConfigurationPackagesRequest = {
  /** The configuration package code */
  code: string;
  /** The configuration package name */
  packageName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiConfigurationPackagesRequestSchema: Schema<CompaniesApiConfigurationPackagesRequest> =
  s.object<CompaniesApiConfigurationPackagesRequest>(
    {
      code: s.string(),
      packageName: s.string(),
    },
    { additionalProperties: s.json() },
  );
