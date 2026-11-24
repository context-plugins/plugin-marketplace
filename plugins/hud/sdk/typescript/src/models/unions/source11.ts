import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifAudioSourceInternalSchema,
  atifAudioSourceSchema,
  type AtifAudioSource,
} from "../atif-audio-source.js";
import { atifImageSourceSchema, type AtifImageSource } from "../atif-image-source.js";

export type Source11 = AtifImageSource | AtifAudioSource;

export const source11InternalSchema: Schema<Source11> = s.of<Source11>(
  s.union([s.lazy(() => atifImageSourceSchema), s.lazy(() => atifAudioSourceInternalSchema)]),
);

export const source11Schema: Schema<Source11> = s.lazySchema(() =>
  s.of<Source11>(s.union([s.lazy(() => atifImageSourceSchema), s.lazy(() => atifAudioSourceSchema)])),
);
