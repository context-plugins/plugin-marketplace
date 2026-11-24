import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  importResourceSpecificationSchema,
  type ImportResourceSpecification,
} from "./import-resource-specification.js";
import { mergeStrategy2Schema, type MergeStrategy2 } from "./merge-strategy2.js";

export type StartImportRequest = {
  /**
   * The unique identifier for the import. It is included in the response from the CreateUploadUrl
   * operation.
   */
  importId: string;
  resourceSpecification: ImportResourceSpecification;
  /**
   * The strategy to use when there is a name conflict between the imported resource and an existing
   * resource. When the merge strategy is FailOnConflict existing resources are not overwritten and
   * the import fails.
   */
  mergeStrategy: MergeStrategy2;
  /**
   * The password used to encrypt the zip archive that contains the resource definition. You should
   * always encrypt the zip archive to protect it during transit between your site and Amazon Lex.
   */
  filePassword?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startImportRequestSchema: Schema<StartImportRequest> = s.object<StartImportRequest>(
  {
    importId: s.string(),
    resourceSpecification: importResourceSpecificationSchema,
    mergeStrategy: mergeStrategy2Schema,
    filePassword: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
