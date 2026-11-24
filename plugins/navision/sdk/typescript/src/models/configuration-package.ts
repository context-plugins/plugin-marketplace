import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applyStatusSchema, type ApplyStatus } from "./apply-status.js";
import { importStatusSchema, type ImportStatus } from "./import-status.js";

export type ConfigurationPackage = {
  id?: string;
  /** The package code */
  code?: string;
  /** The package name */
  packageName?: string;
  languageId?: number;
  productVersion?: string;
  processingOrder?: number;
  excludeConfigurationTables?: boolean;
  numberOfTables?: number;
  numberOfRecords?: number;
  numberOfErrors?: number;
  importStatus?: ImportStatus;
  applyStatus?: ApplyStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configurationPackageSchema: Schema<ConfigurationPackage> = s.object<ConfigurationPackage>(
  {
    id: s.optional(s.string()),
    code: s.optional(s.string()),
    packageName: s.optional(s.string()),
    languageId: s.optional(s.int()),
    productVersion: s.optional(s.string()),
    processingOrder: s.optional(s.int()),
    excludeConfigurationTables: s.optional(s.boolean()),
    numberOfTables: s.optional(s.int()),
    numberOfRecords: s.optional(s.int()),
    numberOfErrors: s.optional(s.int()),
    importStatus: s.optional(s.lazy(() => importStatusSchema)),
    applyStatus: s.optional(s.lazy(() => applyStatusSchema)),
  },
  { additionalProperties: s.json() },
);
