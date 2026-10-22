import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction was authorized at. */
export type AuthorizedAt = Date;

export const authorizedAtSchema: Schema<AuthorizedAt> = s.of<AuthorizedAt>(s.union([s.dateTime()]));
