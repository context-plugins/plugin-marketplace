import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { externalOriginSchema, type ExternalOrigin } from "../external-origin.js";

export type Origin = ExternalOrigin;

export const originSchema: Schema<Origin> = s.of<Origin>(s.union([s.lazy(() => externalOriginSchema)]));
