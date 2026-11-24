import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ProtocolVersion = string;

export const protocolVersionSchema: Schema<ProtocolVersion> = s.of<ProtocolVersion>(s.union([s.string()]));
