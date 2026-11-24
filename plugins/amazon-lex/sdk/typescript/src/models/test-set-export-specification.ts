import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetExportSpecification = {
  /** The unique identifier of the test set. */
  testSetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetExportSpecificationSchema: Schema<TestSetExportSpecification> =
  s.object<TestSetExportSpecification>(
    {
      testSetId: s.string(),
    },
    { additionalProperties: s.json() },
  );
