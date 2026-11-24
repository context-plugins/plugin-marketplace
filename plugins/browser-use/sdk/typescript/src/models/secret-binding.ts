import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceInternalSchema, sourceSchema, type Source } from "./unions/source.js";

/**
 * One credential this run may have typed into a browser field.
 *
 * The value never reaches the agent. It is encrypted at rest, kept out of the worker payload, and
 * typed straight into the focused field by the server when the agent asks for the alias by name —
 * and only while the page it is typing into is on one of `allowedDomains`.
 *
 * Run-scoped: bindings die with the run, so a follow-up run that needs the same credential must
 * send it again.
 */
export type SecretBinding = {
  /** Name the agent refers to this secret by, e.g. "github_password". */
  alias: string;
  source: Source;
  /**
   * Hosts the secret may be typed into, e.g. ["github.com"]. A host covers its subdomains. Bare
   * hostnames only — no scheme, port, path, or wildcard.
   */
  allowedDomains: string[];
};

const secretBindingProperties: s.Shape<SecretBinding> = {
  alias: s.string(),
  source: sourceInternalSchema,
  allowedDomains: s.array(s.string()),
};

export const secretBindingInternalSchema: Schema<SecretBinding> =
  s.object<SecretBinding>(secretBindingProperties);

export const secretBindingSchema: Schema<SecretBinding> = s.lazySchema(() =>
  s.object<SecretBinding>({
    ...secretBindingProperties,
    source: sourceSchema,
    allowedDomains: s.array(s.string()).check(s.minLength(1), s.maxLength(20)),
  }),
);
