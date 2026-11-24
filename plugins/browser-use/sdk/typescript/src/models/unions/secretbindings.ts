import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { secretBindingInternalSchema, secretBindingSchema, type SecretBinding } from "../secret-binding.js";

/**
 * Credentials this run may use without ever seeing them. The agent can ask the server to type a
 * binding by alias on one of its allowed domains; it cannot read the value. Bindings are not
 * persisted past the run.
 */
export type Secretbindings = SecretBinding[];

export const secretbindingsInternalSchema: Schema<Secretbindings> = s.of<Secretbindings>(
  s.union([s.array(s.lazy(() => secretBindingInternalSchema))]),
);

export const secretbindingsSchema: Schema<Secretbindings> = s.lazySchema(() =>
  s.of<Secretbindings>(s.union([s.array(s.lazy(() => secretBindingSchema)).check(s.maxLength(20))])),
);
