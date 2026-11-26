import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publishedAsSchema, type PublishedAs } from "./published-as.js";

export type Extension = {
  /** The extension ID */
  id?: string;
  /** The package ID used for install/uninstall operations */
  packageId?: string;
  /** The extension display name */
  displayName?: string;
  /** The extension publisher */
  publisher?: string;
  /** Major version number */
  versionMajor?: number;
  /** Minor version number */
  versionMinor?: number;
  /** Build version number */
  versionBuild?: number;
  /** Revision version number */
  versionRevision?: number;
  /** Whether the extension is currently installed */
  isInstalled?: boolean;
  /** How the extension was published */
  publishedAs?: PublishedAs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionSchema: Schema<Extension> = s.object<Extension>(
  {
    id: s.optional(s.string()),
    packageId: s.optional(s.string()),
    displayName: s.optional(s.string()),
    publisher: s.optional(s.string()),
    versionMajor: s.optional(s.int()),
    versionMinor: s.optional(s.int()),
    versionBuild: s.optional(s.int()),
    versionRevision: s.optional(s.int()),
    isInstalled: s.optional(s.boolean()),
    publishedAs: s.optional(s.lazy(() => publishedAsSchema)),
  },
  { additionalProperties: s.json() },
);
