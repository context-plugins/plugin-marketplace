import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./detail.js";

export type Error1 = {
  /** Stable error code. Branch on this, not on the message. */
  code: string;
  message: string;
  /** Whether the same request can succeed if you send it again. */
  retriable: boolean;
  /** Quote this ID when you contact support. */
  correlationId?: string;
  details?: Detail[];
};

export const error1Schema: Schema<Error1> = s.object<Error1>({
  code: s.string(),
  message: s.string(),
  retriable: s.boolean(),
  correlationId: s.optional(s.string()),
  details: s.optional(s.array(s.lazy(() => detailSchema))),
});
