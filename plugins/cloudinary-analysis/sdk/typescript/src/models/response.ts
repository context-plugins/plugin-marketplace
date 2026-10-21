import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Response = {
  value?: string;
};

export const responseSchema: Schema<Response> = s.object<Response>({
  value: s.optional(s.string()),
});
