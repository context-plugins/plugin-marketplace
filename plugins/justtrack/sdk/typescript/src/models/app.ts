import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appVersionSchema, type AppVersion } from "./app-version.js";

export type App = {
  version?: AppVersion;
  /** The store id of the app */
  storeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const appProperties: s.Shape<App> = {
  version: s.optional(s.lazy(() => appVersionSchema)),
  storeId: s.string(),
};

export const appInternalSchema: Schema<App> = s.object<App>(appProperties, {
  additionalProperties: s.json(),
});

export const appSchema: Schema<App> = s.lazySchema(() =>
  s.object<App>(
    {
      ...appProperties,
      storeId: s.string().check(s.minLength(1), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);
