import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indexEmployeeRequestSchema, type IndexEmployeeRequest } from "./index-employee-request.js";

/** Describes the request body of the /indexemployeelist API call */
export type IndexEmployeeListRequest = {
  /** List of employee info and version. */
  employees?: IndexEmployeeRequest[];
};

export const indexEmployeeListRequestSchema: Schema<IndexEmployeeListRequest> =
  s.object<IndexEmployeeListRequest>({
    employees: s.optional(s.array(s.lazy(() => indexEmployeeRequestSchema))),
  });
