import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subjectSchema, type Subject } from "./subject.js";

export type Context4 = {
  subject?: Subject;
};

export const context4Schema: Schema<Context4> = s.object<Context4>({
  subject: s.optional(s.lazy(() => subjectSchema)),
});
