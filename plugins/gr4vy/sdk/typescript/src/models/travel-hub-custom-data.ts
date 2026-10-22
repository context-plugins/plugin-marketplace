import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type521Schema, type Type521 } from "./unions/type521.js";

export type TravelHubCustomData = {
  /** The key of the custom data field. */
  name: string;
  /** The value of the custom data field. */
  value: string;
  /** The type of the custom data field. */
  type?: Type521;
};

export const travelHubCustomDataSchema: Schema<TravelHubCustomData> = s.object<TravelHubCustomData>({
  name: s.string(),
  value: s.string(),
  type: s.optional(s.lazy(() => type521Schema)),
});
