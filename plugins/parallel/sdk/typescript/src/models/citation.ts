import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { excerptsSchema, type Excerpts } from "./unions/excerpts.js";
import { titleSchema, type Title } from "./unions/title.js";

/** A citation for a task output. */
export type Citation = {
  /** Title of the citation. */
  title?: Title;
  /** URL of the citation. */
  url: string;
  /** Excerpts from the citation supporting the output. Only certain processors provide excerpts. */
  excerpts?: Excerpts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const citationSchema: Schema<Citation> = s.object<Citation>(
  {
    title: s.optional(s.lazy(() => titleSchema)),
    url: s.string(),
    excerpts: s.optional(s.lazy(() => excerptsSchema)),
  },
  { additionalProperties: s.json() },
);
