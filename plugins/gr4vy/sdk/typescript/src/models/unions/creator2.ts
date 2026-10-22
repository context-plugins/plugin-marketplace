import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { creatorSchema, type Creator } from "../creator.js";

/** The user or API key pair that created this API key pair. */
export type Creator2 = Creator;

export const creator2Schema: Schema<Creator2> = s.of<Creator2>(s.union([s.lazy(() => creatorSchema)]));
