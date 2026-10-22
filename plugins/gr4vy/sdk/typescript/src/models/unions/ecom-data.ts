import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeEcomDataSchema, type PazeEcomData } from "../paze-ecom-data.js";

/** Details pertaining to electronic commerce purchases. */
export type EcomData = PazeEcomData;

export const ecomDataSchema: Schema<EcomData> = s.of<EcomData>(s.union([s.lazy(() => pazeEcomDataSchema)]));
