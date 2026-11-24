import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { androidSchema, type Android } from "./android.js";
import { ioSchema, type Io } from "./io.js";

export type Apps = {
  websites?: string[];
  android?: Android[];
  ios?: Io[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsSchema: Schema<Apps> = s.object<Apps>(
  {
    websites: s.optional(s.array(s.string())),
    android: s.optional(s.array(s.lazy(() => androidSchema))),
    ios: s.optional(s.array(s.lazy(() => ioSchema))),
  },
  { additionalProperties: s.json() },
);
