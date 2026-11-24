import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";

export type Meta2 = {
  requestId: string;
  /** Polling and in-progress/failed states never bill. @default 0 */
  creditsCharged?: 0;
  platforms: Platform[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta2Schema: Schema<Meta2> = s.object<Meta2>(
  {
    requestId: s.string(),
    creditsCharged: s.defaulted(s.literal(0), 0),
    platforms: s.array(s.lazy(() => platformSchema)),
  },
  { additionalProperties: s.json() },
);
