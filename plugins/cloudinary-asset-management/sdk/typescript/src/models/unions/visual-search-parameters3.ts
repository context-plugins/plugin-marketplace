import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { visualSearchParametersSchema, type VisualSearchParameters } from "../visual-search-parameters.js";
import { visualSearchParameters1Schema, type VisualSearchParameters1 } from "../visual-search-parameters1.js";
import { visualSearchParameters2Schema, type VisualSearchParameters2 } from "../visual-search-parameters2.js";

/** Parameters for visual search operations */
export type VisualSearchParameters3 =
  | VisualSearchParameters
  | VisualSearchParameters1
  | VisualSearchParameters2;

export const visualSearchParameters3Schema: Schema<VisualSearchParameters3> = s.of<VisualSearchParameters3>(
  s.union([
    s.lazy(() => visualSearchParametersSchema),
    s.lazy(() => visualSearchParameters1Schema),
    s.lazy(() => visualSearchParameters2Schema),
  ]),
);
