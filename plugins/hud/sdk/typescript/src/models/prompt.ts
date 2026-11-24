import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { argumentsSchema, type Arguments } from "./unions/arguments.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { iconsSchema, type Icons } from "./unions/icons.js";
import { metaSchema, type Meta } from "./unions/meta.js";
import { titleSchema, type Title } from "./unions/title.js";

/** A prompt or prompt template that the server offers. */
export type Prompt = {
  name: string;
  title?: Title;
  description?: Description;
  arguments?: Arguments;
  icons?: Icons;
  meta?: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptSchema: Schema<Prompt> = s.object<Prompt>(
  {
    name: s.string(),
    title: s.optional(s.lazy(() => titleSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    arguments: s.optional(s.lazy(() => argumentsSchema)),
    icons: s.optional(s.lazy(() => iconsSchema)),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      meta: "_meta",
    },
  },
  { additionalProperties: s.json() },
);
