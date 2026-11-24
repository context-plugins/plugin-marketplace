import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateRequest = {
  /** Recipe title (e.g. "Vanilla Yogurt Parfait") */
  title: string;
  /**
   * List of strings where each element is a recipe ingredient (e.g. ["2 cups of greek yogurt", "2
   * tablespoons of honey", "1 teaspoon of vanilla extract"]). Don't include items in the list that
   * the user already mentioned they have.
   */
  ingredients: string[];
  /** List of strings where each element is a recipe instruction */
  instructions: string[];
  /**
   * This field stores the question asked by the user about recipe or mealplan in the current chat
   * session. For instance, a user can ask "recipe for chocolate cookies" and the assistant responds
   * by listing the ingredients needed to make chocolate cookies. In this chat interaction, we need
   * to return "recipe for chocolate cookies" as the value in this field
   */
  question: string;
  /** The value used to populate this field should always be "OpenAI" */
  partnerName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createRequestSchema: Schema<CreateRequest> = s.object<CreateRequest>(
  {
    title: s.string(),
    ingredients: s.array(s.string()),
    instructions: s.array(s.string()),
    question: s.string(),
    partnerName: s.string(),
    _keysMap: {
      partnerName: "partner_name",
    },
  },
  { additionalProperties: s.json() },
);
