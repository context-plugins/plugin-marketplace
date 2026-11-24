import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regions1Schema, type Regions1 } from "./regions1.js";

export type Regions = {
  version: string;
  defaultRegion: string;
  regions: Regions1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regionsSchema: Schema<Regions> = s.object<Regions>(
  {
    version: s.string(),
    defaultRegion: s.string(),
    regions: s.array(s.lazy(() => regions1Schema)),
    _keysMap: {
      defaultRegion: "default_region",
    },
  },
  { additionalProperties: s.json() },
);
