import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UnsubscribeUrl = string;

export const unsubscribeUrlSchema: Schema<UnsubscribeUrl> = s.of<UnsubscribeUrl>(s.union([s.string()]));
