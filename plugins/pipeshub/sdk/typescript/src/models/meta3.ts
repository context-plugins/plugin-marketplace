import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta3 = {
  /**
   * Server-side request identifier. Read from the `X-Request-ID` header when supplied, otherwise
   * auto-generated, so this field is always present.
   */
  requestId: string;
  timestamp: Date;
  /** Server-side processing time in milliseconds. */
  duration: number;
};

export const meta3Schema: Schema<Meta3> = s.object<Meta3>({
  requestId: s.string(),
  timestamp: s.dateTime(),
  duration: s.int(),
});
