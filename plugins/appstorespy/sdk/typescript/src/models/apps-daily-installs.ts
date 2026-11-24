import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppsDailyInstalls = {
  id: string;
  date: string;
  ipd: number;
  installs?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appsDailyInstallsSchema: Schema<AppsDailyInstalls> = s.object<AppsDailyInstalls>(
  {
    id: s.string(),
    date: s.dateOnly(),
    ipd: s.int(),
    installs: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
