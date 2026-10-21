import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { infoSchema, type Info } from "../info.js";
import { restoreResponseSchema, type RestoreResponse } from "../restore-response.js";

export type RestoreResponse1 = Info | RestoreResponse;

export const restoreResponse1Schema: Schema<RestoreResponse1> = s.of<RestoreResponse1>(
  s.union([s.lazy(() => infoSchema), s.lazy(() => restoreResponseSchema)]),
);
