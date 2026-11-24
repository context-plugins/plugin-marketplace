import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Latlng = {
  latitude?: number;
  longitude?: number;
};

export const latlngSchema: Schema<Latlng> = s.object<Latlng>({
  latitude: s.optional(s.float64()),
  longitude: s.optional(s.float64()),
});
