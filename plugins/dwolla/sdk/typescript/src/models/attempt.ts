import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestSchema, type Request } from "./request.js";
import { responseSchema, type Response } from "./response.js";

export type Attempt = {
  id?: string;
  request?: Request;
  response?: Response;
};

export const attemptSchema: Schema<Attempt> = s.object<Attempt>({
  id: s.optional(s.string()),
  request: s.optional(s.lazy(() => requestSchema)),
  response: s.optional(s.lazy(() => responseSchema)),
});
