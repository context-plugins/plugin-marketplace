import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { grantProvenanceSchema, type GrantProvenance } from "../grant-provenance.js";

export type XPlinthPlinthUsDataGrantsApi = GrantProvenance;

export const xPlinthPlinthUsDataGrantsApiSchema: Schema<XPlinthPlinthUsDataGrantsApi> =
  s.of<XPlinthPlinthUsDataGrantsApi>(s.union([s.lazy(() => grantProvenanceSchema)]));
