import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotations11Schema, type Annotations11 } from "./unions/annotations11.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { executionSchema, type Execution } from "./unions/execution.js";
import { iconsSchema, type Icons } from "./unions/icons.js";
import { metaSchema, type Meta } from "./unions/meta.js";
import { outputschemaSchema, type Outputschema } from "./unions/outputschema.js";
import { titleSchema, type Title } from "./unions/title.js";

/** Definition for a tool the client can call. */
export type Tool = {
  name: string;
  title?: Title;
  description?: Description;
  inputSchema: Record<string, unknown>;
  outputSchema?: Outputschema;
  icons?: Icons;
  annotations?: Annotations11;
  meta?: Meta;
  execution?: Execution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const toolSchema: Schema<Tool> = s.object<Tool>(
  {
    name: s.string(),
    title: s.optional(s.lazy(() => titleSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    inputSchema: s.record(s.string(), s.unknown()),
    outputSchema: s.optional(s.lazy(() => outputschemaSchema)),
    icons: s.optional(s.lazy(() => iconsSchema)),
    annotations: s.optional(s.lazy(() => annotations11Schema)),
    meta: s.optional(s.lazy(() => metaSchema)),
    execution: s.optional(s.lazy(() => executionSchema)),
    _keysMap: {
      meta: "_meta",
    },
  },
  { additionalProperties: s.json() },
);
