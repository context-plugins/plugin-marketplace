import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appCreativeVideoSchema, type AppCreativeVideo } from "./app-creative-video.js";
import { imageSchema, type Image } from "./image.js";
import { networkSchema, type Network } from "./unions/network.js";

export type Creatives = {
  video: AppCreativeVideo;
  image: Image;
  fb: string[];
  network: Network;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creativesSchema: Schema<Creatives> = s.object<Creatives>(
  {
    video: appCreativeVideoSchema,
    image: imageSchema,
    fb: s.array(s.string()),
    network: networkSchema,
  },
  { additionalProperties: s.json() },
);
