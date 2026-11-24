import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OwnerResponse = string;

export const ownerResponseSchema: Schema<OwnerResponse> = s.of<OwnerResponse>(s.union([s.string()]));
