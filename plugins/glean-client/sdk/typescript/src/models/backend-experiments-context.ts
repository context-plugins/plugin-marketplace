import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackendExperimentsContext = {
  /** List of experiment ids for the corresponding request. */
  experimentIds?: number[];
};

export const backendExperimentsContextSchema: Schema<BackendExperimentsContext> =
  s.object<BackendExperimentsContext>({
    experimentIds: s.optional(s.array(s.int())),
  });
