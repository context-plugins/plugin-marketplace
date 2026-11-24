import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idrRunSchema, type IdrRun } from "./idr-run.js";

/** The output of a request to list runs for an IDR graph. */
export type ListIdrRunsOutput = {
  data: IdrRun[];
  hasMore: boolean;
};

export const listIdrRunsOutputSchema: Schema<ListIdrRunsOutput> = s.object<ListIdrRunsOutput>({
  data: s.array(s.lazy(() => idrRunSchema)),
  hasMore: s.boolean(),
});
