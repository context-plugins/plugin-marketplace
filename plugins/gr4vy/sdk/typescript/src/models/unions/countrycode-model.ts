import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 3166-1 alpha-2 country code. */
export type CountrycodeModel = string;

export const countrycodeModelSchema: Schema<CountrycodeModel> = s.of<CountrycodeModel>(s.union([s.string()]));
