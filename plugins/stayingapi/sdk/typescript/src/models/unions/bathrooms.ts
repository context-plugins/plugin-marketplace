import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Bathrooms = number;

export const bathroomsInternalSchema: Schema<Bathrooms> = s.of<Bathrooms>(s.union([s.float64()]));

export const bathroomsSchema: Schema<Bathrooms> = s.lazySchema(() =>
  s.of<Bathrooms>(s.union([s.float64().check(s.gte(0))])),
);
