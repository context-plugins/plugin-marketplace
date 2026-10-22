import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRunnableJobCollectionInputSchema,
  type TypeOptionsRunnableJobCollectionInput,
} from "./type-options-runnable-job-collection-input.js";

export type RunnableJobCollectionTypeCollectionConstraint = {
  /** Resource type identifier. */
  type?: TypeOptionsRunnableJobCollectionInput;
};

export const runnableJobCollectionTypeCollectionConstraintSchema: Schema<RunnableJobCollectionTypeCollectionConstraint> =
  s.object<RunnableJobCollectionTypeCollectionConstraint>({
    type: s.optional(s.lazy(() => typeOptionsRunnableJobCollectionInputSchema)),
  });
