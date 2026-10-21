import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";
import { subjectSchema, type Subject } from "./subject.js";

export type Context1 = {
  config: Config;
  subject: Subject;
};

export const context1Schema: Schema<Context1> = s.object<Context1>({
  config: configSchema,
  subject: subjectSchema,
});
