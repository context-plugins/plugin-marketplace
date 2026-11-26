import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Viewport = {
  /** @default 1440 */
  width?: number;
  /** @default 900 */
  height?: number;
  /** @default 1 */
  deviceScaleFactor?: number;
};

const viewportProperties: s.Shape<Viewport> = {
  width: s.defaulted(s.int(), 1440),
  height: s.defaulted(s.int(), 900),
  deviceScaleFactor: s.defaulted(s.float64(), 1),
  _keysMap: {
    deviceScaleFactor: "device_scale_factor",
  },
};

export const viewportInternalSchema: Schema<Viewport> = s.object<Viewport>(viewportProperties);

export const viewportSchema: Schema<Viewport> = s.lazySchema(() =>
  s.object<Viewport>({
    ...viewportProperties,
    width: s.defaulted(s.int().check(s.gte(320), s.lte(2560)), 1440),
    height: s.defaulted(s.int().check(s.gte(200), s.lte(1440)), 900),
    deviceScaleFactor: s.defaulted(s.float64().check(s.gte(1), s.lte(2)), 1),
  }),
);
