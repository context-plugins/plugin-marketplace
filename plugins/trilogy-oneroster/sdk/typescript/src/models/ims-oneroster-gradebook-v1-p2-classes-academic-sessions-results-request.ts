import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest = {
  results: Result[];
};

export const imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequestSchema: Schema<ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest> =
  s.object<ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest>({
    results: s.array(s.lazy(() => resultSchema)),
  });
