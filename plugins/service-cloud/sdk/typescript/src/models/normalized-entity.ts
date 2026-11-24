import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitySourceSchema, type EntitySource } from "./entity-source.js";

export type NormalizedEntity = {
  /** Probability number that the AI assigns to this entity. */
  confidenceScore: number;
  /** Value of the entity that the customer enters. */
  value: string;
  /**
   * System or custom entity Type ([What’s an
   * Entity?](https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_an_entity.htm&type=5)).
   */
  type: string;
  /**
   * "Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the
   * entity by itself."
   *
   * * `BOT_SERVICE`—Bot detects entity without Natural Language Processing (NLP)
   * * `CORE_NLP`—Third-party NLP
   * * `EINSTEIN_NLP`—Einstein NLP
   */
  entitySource?: EntitySource;
};

export const normalizedEntitySchema: Schema<NormalizedEntity> = s.object<NormalizedEntity>({
  confidenceScore: s.float64(),
  value: s.string(),
  type: s.string(),
  entitySource: s.optional(s.lazy(() => entitySourceSchema)),
});
