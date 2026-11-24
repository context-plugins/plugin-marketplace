import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { envManifestSchema, type EnvManifest } from "../env-manifest.js";

export type Manifest = EnvManifest;

export const manifestSchema: Schema<Manifest> = s.of<Manifest>(s.union([s.lazy(() => envManifestSchema)]));
