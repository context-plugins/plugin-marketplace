import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayAppsInstallsDaily401Error = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppsInstallsDaily401ErrorSchema: Schema<PlayAppsInstallsDaily401Error> =
  s.object<PlayAppsInstallsDaily401Error>(
    {
      message: s.string(),
      code: s.int(),
    },
    { additionalProperties: s.json() },
  );
