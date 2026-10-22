import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Payload that may be required to update a payment provider's client session, depending on the
 * connector.
 */
export type Payload = Record<string, unknown>;

export const payloadSchema: Schema<Payload> = s.of<Payload>(s.union([s.record(s.string(), s.unknown())]));
