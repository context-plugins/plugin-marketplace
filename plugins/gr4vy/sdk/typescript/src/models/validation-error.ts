import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./unions/location.js";

export type ValidationError = {
  loc: Location[];
  msg: string;
  type: string;
  input?: Record<string, unknown>;
  ctx?: Record<string, unknown>;
};

export const validationErrorSchema: Schema<ValidationError> = s.object<ValidationError>({
  loc: s.array(s.lazy(() => locationSchema)),
  msg: s.string(),
  type: s.string(),
  input: s.optional(s.record(s.string(), s.unknown())),
  ctx: s.optional(s.record(s.string(), s.unknown())),
});
