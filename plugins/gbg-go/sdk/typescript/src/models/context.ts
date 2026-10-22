import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subjectSchema, type Subject } from "./subject.js";

export type Context = {
  subject: Subject;
};

export const contextSchema: Schema<Context> = s.object<Context>({
  subject: subjectSchema,
});
