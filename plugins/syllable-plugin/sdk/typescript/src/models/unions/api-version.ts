import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Version of the provider's API. */
export type ApiVersion = string;

export const apiVersionSchema: Schema<ApiVersion> = s.of<ApiVersion>(s.union([s.string()]));
