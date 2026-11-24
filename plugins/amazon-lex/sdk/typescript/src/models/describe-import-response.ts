import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  importResourceSpecificationSchema,
  type ImportResourceSpecification,
} from "./import-resource-specification.js";
import { importStatus1Schema, type ImportStatus1 } from "./import-status1.js";
import { mergeStrategySchema, type MergeStrategy } from "./merge-strategy.js";

export type DescribeImportResponse = {
  /** The unique identifier of the described import. */
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  /** The unique identifier that Amazon Lex assigned to the resource created by the import. */
  importedResourceId?: string;
  /** The name of the imported resource. */
  importedResourceName?: string;
  /**
   * The strategy used when there was a name conflict between the imported resource and an existing
   * resource. When the merge strategy is FailOnConflict existing resources are not overwritten and
   * the import fails.
   */
  mergeStrategy?: MergeStrategy;
  /**
   * The status of the import process. When the status is Completed the resource is imported and
   * ready for use.
   */
  importStatus?: ImportStatus1;
  /** If the importStatus field is Failed, this provides one or more reasons for the failure. */
  failureReasons?: string[];
  /** The date and time that the import was created. */
  creationDateTime?: Date;
  /** The date and time that the import was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeImportResponseSchema: Schema<DescribeImportResponse> = s.object<DescribeImportResponse>(
  {
    importId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => importResourceSpecificationSchema)),
    importedResourceId: s.optional(s.string()),
    importedResourceName: s.optional(s.string()),
    mergeStrategy: s.optional(s.lazy(() => mergeStrategySchema)),
    importStatus: s.optional(s.lazy(() => importStatus1Schema)),
    failureReasons: s.optional(s.array(s.string())),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
