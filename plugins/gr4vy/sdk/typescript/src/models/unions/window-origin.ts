import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The origin of the window where the payment is initiated, used for 3D Secure authentication. */
export type WindowOrigin = string;

export const windowOriginSchema: Schema<WindowOrigin> = s.of<WindowOrigin>(s.union([s.string()]));
