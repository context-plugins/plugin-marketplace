import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Click = {
  id: string;
  url: string;
  continent: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  os: string;
  referer: string;
  refererUrl: string;
  type: string;
  ip: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickSchema: Schema<Click> = s.object<Click>(
  {
    id: s.string(),
    url: s.string(),
    continent: s.string(),
    country: s.string(),
    city: s.string(),
    device: s.string(),
    browser: s.string(),
    os: s.string(),
    referer: s.string(),
    refererUrl: s.string(),
    type: s.string(),
    ip: s.string(),
  },
  { additionalProperties: s.json() },
);
