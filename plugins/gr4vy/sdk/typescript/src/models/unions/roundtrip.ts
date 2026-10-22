import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether departure and return trips are being purchased in the same transaction. */
export type Roundtrip = boolean;

export const roundtripSchema: Schema<Roundtrip> = s.of<Roundtrip>(s.union([s.boolean()]));
