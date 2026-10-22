import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ImsOnerosterGradebookV1P2ResultsRequest = {
  /** Represents a result. */
  result: Result;
};

export const imsOnerosterGradebookV1P2ResultsRequestSchema: Schema<ImsOnerosterGradebookV1P2ResultsRequest> =
  s.object<ImsOnerosterGradebookV1P2ResultsRequest>({
    result: resultSchema,
  });
