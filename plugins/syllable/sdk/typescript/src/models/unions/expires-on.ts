import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of batch expiration */
export type ExpiresOn = Date;

export const expiresOnSchema: Schema<ExpiresOn> = s.of<ExpiresOn>(s.union([s.dateTime()]));
