import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  importResourceSpecificationSchema,
  type ImportResourceSpecification,
} from "./import-resource-specification.js";
import { importStatus3Schema, type ImportStatus3 } from "./import-status3.js";
import { mergeStrategySchema, type MergeStrategy } from "./merge-strategy.js";

export type StartImportResponse = {
  /** A unique identifier for the import. */
  importId?: string;
  resourceSpecification?: ImportResourceSpecification;
  /**
   * The strategy used when there was a name conflict between the imported resource and an existing
   * resource. When the merge strategy is FailOnConflict existing resources are not overwritten and
   * the import fails.
   */
  mergeStrategy?: MergeStrategy;
  /**
   * The current status of the import. When the status is Complete the bot, bot alias, or custom
   * vocabulary is ready to use.
   */
  importStatus?: ImportStatus3;
  /** The date and time that the import request was created. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startImportResponseSchema: Schema<StartImportResponse> = s.object<StartImportResponse>(
  {
    importId: s.optional(s.string()),
    resourceSpecification: s.optional(s.lazy(() => importResourceSpecificationSchema)),
    mergeStrategy: s.optional(s.lazy(() => mergeStrategySchema)),
    importStatus: s.optional(s.lazy(() => importStatus3Schema)),
    creationDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
