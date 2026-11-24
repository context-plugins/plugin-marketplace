import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { configurationPackageSchema, type ConfigurationPackage } from "./configuration-package.js";

export type CompaniesApiConfigurationPackagesResponse = {
  value?: ConfigurationPackage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiConfigurationPackagesResponseSchema: Schema<CompaniesApiConfigurationPackagesResponse> =
  s.object<CompaniesApiConfigurationPackagesResponse>(
    {
      value: s.optional(s.array(s.lazy(() => configurationPackageSchema))),
    },
    { additionalProperties: s.json() },
  );
