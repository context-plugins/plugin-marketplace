import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Response = {
  status?: string;
};

export const responseSchema: Schema<Response> = s.object<Response>({
  status: s.optional(s.string()),
});
