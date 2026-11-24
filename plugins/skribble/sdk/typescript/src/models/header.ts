import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata and status information about the signature request */
export type Header = {
  signatureRequestId?: string;
  skribbleLogo?: string | null;
  title?: string;
  status?: string;
  signatureCount?: number;
  signatureCountSigned?: number;
  attachmentNames?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const headerProperties: s.Shape<Header> = {
  signatureRequestId: s.optional(s.string()),
  skribbleLogo: s.optionalNullable(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.string()),
  signatureCount: s.optional(s.int()),
  signatureCountSigned: s.optional(s.int()),
  attachmentNames: s.optional(s.string()),
  _keysMap: {
    signatureRequestId: "signatureRequestID",
  },
};

export const headerInternalSchema: Schema<Header> = s.object<Header>(headerProperties, {
  additionalProperties: s.json(),
});

export const headerSchema: Schema<Header> = s.lazySchema(() =>
  s.object<Header>(
    {
      ...headerProperties,
      signatureCount: s.optional(s.int().check(s.gte(0))),
      signatureCountSigned: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
