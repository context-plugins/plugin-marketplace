import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the
 * entity by itself."
 *
 * * `BOT_SERVICE`—Bot detects entity without Natural Language Processing (NLP)
 * * `CORE_NLP`—Third-party NLP
 * * `EINSTEIN_NLP`—Einstein NLP
 */
export const EntitySource = {
  BotService: "BOT_SERVICE",
  CoreNlp: "CORE_NLP",
  EinsteinNlp: "EINSTEIN_NLP",
} as const;
export type EntitySource = (typeof EntitySource)[keyof typeof EntitySource] | (string & {});

export const entitySourceSchema: EnumSchema<EntitySource> = s.enumOf<EntitySource>(EntitySource);
