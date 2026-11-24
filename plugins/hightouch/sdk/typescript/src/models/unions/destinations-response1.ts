import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { destinationSchema, type Destination } from "../destination.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DestinationsResponse1 = Destination | ValidateErrorJson | InternalServerError;

export const destinationsResponse1Schema: Schema<DestinationsResponse1> = s.of<DestinationsResponse1>(
  s.union([
    s.lazy(() => destinationSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
