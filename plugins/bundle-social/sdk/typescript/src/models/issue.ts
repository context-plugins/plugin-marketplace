import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { pathSchema, type Path } from "./unions/path.js";

export type Issue = {
  code?: Code | null;
  message: string;
  path?: Path[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issueSchema: Schema<Issue> = s.object<Issue>(
  {
    code: s.optionalNullable(s.lazy(() => codeSchema)),
    message: s.string(),
    path: s.optionalNullable(s.array(s.lazy(() => pathSchema))),
  },
  { additionalProperties: s.json() },
);
