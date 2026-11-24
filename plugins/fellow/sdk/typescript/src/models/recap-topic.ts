import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recapBulletPointSchema, type RecapBulletPoint } from "./recap-bullet-point.js";

export type RecapTopic = {
  title: string;
  bulletPoints: RecapBulletPoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapTopicSchema: Schema<RecapTopic> = s.object<RecapTopic>(
  {
    title: s.string(),
    bulletPoints: s.array(s.lazy(() => recapBulletPointSchema)),
    _keysMap: {
      bulletPoints: "bullet_points",
    },
  },
  { additionalProperties: s.json() },
);
