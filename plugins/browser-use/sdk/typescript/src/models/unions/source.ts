import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  inlineSecretSourceInternalSchema,
  inlineSecretSourceSchema,
  type InlineSecretSource,
} from "../inline-secret-source.js";
import {
  onePasswordSecretSourceInternalSchema,
  onePasswordSecretSourceSchema,
  type OnePasswordSecretSource,
} from "../one-password-secret-source.js";

export type Source =
  | (InlineSecretSource & { type: "inline" })
  | (OnePasswordSecretSource & { type: "onepassword" });

export const sourceInternalSchema: Schema<Source> = s.discriminatedUnion<Source>("type", {
  inline: inlineSecretSourceInternalSchema,
  onepassword: onePasswordSecretSourceInternalSchema,
});

export const sourceSchema: Schema<Source> = s.lazySchema(() =>
  s.discriminatedUnion<Source>("type", {
    inline: inlineSecretSourceSchema,
    onepassword: onePasswordSecretSourceSchema,
  }),
);
