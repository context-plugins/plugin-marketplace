import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tlsSettingsSchema, type TlsSettings } from "../tls-settings.js";

/**
 * Global TLS/SSL settings applied to all outbound connections that do not specify their own TLS
 * configuration.
 */
export type TlsSettings1 = TlsSettings | Record<string, unknown>;

export const tlsSettings1Schema: Schema<TlsSettings1> = s.of<TlsSettings1>(
  s.union([s.lazy(() => tlsSettingsSchema), s.record(s.string(), s.unknown())]),
);
