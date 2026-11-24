import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Person = {
  /** @default "person" */
  kind?: "person";
  urn: string;
  /**
   * Text to render the mention with. Empty when LinkedIn did not give us the member's name — see
   * needsDisplayName.
   */
  display: string;
  headline?: string;
  photoUrl?: string;
  /**
   * True when the member was resolved but their name was not. Supply the name yourself: LinkedIn
   * only renders a mention when the text matches the member's name exactly (case sensitive), so a
   * vanity slug never works.
   */
  needsDisplayName?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const personProperties: s.Shape<Person> = {
  kind: s.defaulted(s.literal("person"), "person"),
  urn: s.string(),
  display: s.string(),
  headline: s.optional(s.string()),
  photoUrl: s.optional(s.string()),
  needsDisplayName: s.optional(s.boolean()),
};

export const personInternalSchema: Schema<Person> = s.object<Person>(personProperties, {
  additionalProperties: s.json(),
});

export const personSchema: Schema<Person> = s.lazySchema(() =>
  s.object<Person>(
    {
      ...personProperties,
      photoUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
