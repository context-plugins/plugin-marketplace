import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** State or region of the beneficiary's address. */
export type Region = string;

export const regionSchema: Schema<Region> = s.of<Region>(s.union([s.string()]));
