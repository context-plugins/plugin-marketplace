import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ImsOnerosterGradebookV1P2ResultsResponse2 = {
  /** Represents a result. */
  result: Result;
};

export const imsOnerosterGradebookV1P2ResultsResponse2Schema: Schema<ImsOnerosterGradebookV1P2ResultsResponse2> =
  s.object<ImsOnerosterGradebookV1P2ResultsResponse2>({
    result: resultSchema,
  });
