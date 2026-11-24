import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Downloads = {
  signedPdf?: string | null;
  proof?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const downloadsProperties: s.Shape<Downloads> = {
  signedPdf: s.optionalNullable(s.string()),
  proof: s.optionalNullable(s.string()),
  _keysMap: {
    signedPdf: "signed_pdf",
  },
};

export const downloadsInternalSchema: Schema<Downloads> = s.object<Downloads>(downloadsProperties, {
  additionalProperties: s.json(),
});

export const downloadsSchema: Schema<Downloads> = s.lazySchema(() =>
  s.object<Downloads>(
    {
      ...downloadsProperties,
      signedPdf: s.optionalNullable(s.string().check(s.url())),
      proof: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
