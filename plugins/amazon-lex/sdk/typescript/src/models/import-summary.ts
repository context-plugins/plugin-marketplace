import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importStatus2Schema, type ImportStatus2 } from "./import-status2.js";
import { importedResourceTypeSchema, type ImportedResourceType } from "./imported-resource-type.js";
import { mergeStrategy1Schema, type MergeStrategy1 } from "./merge-strategy1.js";

export type ImportSummary = {
  /** The unique identifier that Amazon Lex assigned to the import. */
  importId?: string;
  /** The unique identifier that Amazon Lex assigned to the imported resource. */
  importedResourceId?: string;
  /** The name that you gave the imported resource. */
  importedResourceName?: string;
  /** The status of the resource. When the status is Completed the resource is ready to build. */
  importStatus?: ImportStatus2;
  /**
   * The strategy used to merge existing bot or bot locale definitions with the imported definition.
   */
  mergeStrategy?: MergeStrategy1;
  /** The date and time that the import was created. */
  creationDateTime?: Date;
  /** The date and time that the import was last updated. */
  lastUpdatedDateTime?: Date;
  /** The type of resource that was imported. */
  importedResourceType?: ImportedResourceType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importSummarySchema: Schema<ImportSummary> = s.object<ImportSummary>(
  {
    importId: s.optional(s.string()),
    importedResourceId: s.optional(s.string()),
    importedResourceName: s.optional(s.string()),
    importStatus: s.optional(s.lazy(() => importStatus2Schema)),
    mergeStrategy: s.optional(s.lazy(() => mergeStrategy1Schema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    importedResourceType: s.optional(s.lazy(() => importedResourceTypeSchema)),
  },
  { additionalProperties: s.json() },
);
