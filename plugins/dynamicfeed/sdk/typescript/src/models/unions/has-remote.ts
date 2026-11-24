import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** only servers with a hosted/remote endpoint */
export type HasRemote = boolean;

export const hasRemoteSchema: Schema<HasRemote> = s.of<HasRemote>(s.union([s.boolean()]));
