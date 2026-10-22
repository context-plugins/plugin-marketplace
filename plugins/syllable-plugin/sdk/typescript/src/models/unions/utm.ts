import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { daoUtmSchema, type DaoUtm } from "../dao-utm.js";

/** Optional UTM campaign attribution to record in user_metadata. */
export type Utm = DaoUtm;

export const utmSchema: Schema<Utm> = s.of<Utm>(s.union([s.lazy(() => daoUtmSchema)]));
