import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { externalIdResourceSchema, type ExternalIdResource } from "../external-id-resource.js";

export type ExternalId = ExternalIdResource;

export const externalIdSchema: Schema<ExternalId> = s.of<ExternalId>(
  s.union([s.lazy(() => externalIdResourceSchema)]),
);
