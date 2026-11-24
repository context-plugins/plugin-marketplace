import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Streaming = boolean | string;

export const streamingSchema: Schema<Streaming> = s.of<Streaming>(s.union([s.boolean(), s.string()]));
