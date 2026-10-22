import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tlsSettingsSchema, type TlsSettings } from "../tls-settings.js";

export type TlsSettings11 = TlsSettings | Record<string, unknown>;

export const tlsSettings11Schema: Schema<TlsSettings11> = s.of<TlsSettings11>(
  s.union([s.lazy(() => tlsSettingsSchema), s.record(s.string(), s.unknown())]),
);
