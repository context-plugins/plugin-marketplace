import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesErrorSchema, type ResponsesError } from "../responses-error.js";

/** An error object returned when the model fails to generate a Response. */
export type Error = ResponsesError;

export const errorSchema: Schema<Error> = s.of<Error>(s.union([s.lazy(() => responsesErrorSchema)]));
