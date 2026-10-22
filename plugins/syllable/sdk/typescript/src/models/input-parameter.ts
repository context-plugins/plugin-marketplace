import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description3Schema, type Description3 } from "./unions/description3.js";
import { enumSchema, type Enum } from "./unions/enum.js";
import { examplesSchema, type Examples } from "./unions/examples.js";
import { formatSchema, type Format } from "./unions/format.js";
import { patternSchema, type Pattern } from "./unions/pattern.js";
import { titleSchema, type Title } from "./unions/title.js";
import { type41Schema, type Type41 } from "./unions/type41.js";

export type InputParameter = {
  /** The name of the property. */
  name: string;
  type?: Type41;
  description?: Description3;
  title?: Title;
  format?: Format;
  pattern?: Pattern;
  enum?: Enum;
  examples?: Examples;
  /** @default true */
  required?: boolean;
};

export const inputParameterSchema: Schema<InputParameter> = s.object<InputParameter>({
  name: s.string(),
  type: s.optional(s.lazy(() => type41Schema)),
  description: s.optional(s.lazy(() => description3Schema)),
  title: s.optional(s.lazy(() => titleSchema)),
  format: s.optional(s.lazy(() => formatSchema)),
  pattern: s.optional(s.lazy(() => patternSchema)),
  enum: s.optional(s.lazy(() => enumSchema)),
  examples: s.optional(s.lazy(() => examplesSchema)),
  required: s.defaulted(s.boolean(), true),
});
