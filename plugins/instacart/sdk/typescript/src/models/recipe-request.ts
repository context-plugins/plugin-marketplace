import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentCreatorCreditInfoInternalSchema,
  contentCreatorCreditInfoSchema,
  type ContentCreatorCreditInfo,
} from "./content-creator-credit-info.js";
import { ingredientSchema, type Ingredient } from "./ingredient.js";

export type RecipeRequest = {
  /** The title of the recipe displayed on the recipe page. */
  title: string;
  /** URL of an image to display for the recipe. */
  imageUrl?: string;
  /** The name of the recipe author. */
  author?: string;
  /** The number of servings the recipe makes. */
  servings?: number;
  /** The estimated cooking time for the recipe. */
  cookingTime?: string;
  /** An external identifier for the recipe from the partner system. */
  externalReferenceId?: string;
  /** Information for crediting the content creator on the recipe page. */
  contentCreatorCreditInfo?: ContentCreatorCreditInfo;
  /** The number of seconds until the generated recipe link expires. */
  expiresIn?: number;
  /** Step-by-step cooking instructions for the recipe. */
  instructions?: string[];
  /** The list of ingredients required for the recipe. */
  ingredients: Ingredient[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recipeRequestProperties: s.Shape<RecipeRequest> = {
  title: s.string(),
  imageUrl: s.optional(s.string()),
  author: s.optional(s.string()),
  servings: s.optional(s.int()),
  cookingTime: s.optional(s.string()),
  externalReferenceId: s.optional(s.string()),
  contentCreatorCreditInfo: s.optional(s.lazy(() => contentCreatorCreditInfoInternalSchema)),
  expiresIn: s.optional(s.int()),
  instructions: s.optional(s.array(s.string())),
  ingredients: s.array(s.lazy(() => ingredientSchema)),
  _keysMap: {
    imageUrl: "image_url",
    cookingTime: "cooking_time",
    externalReferenceId: "external_reference_id",
    contentCreatorCreditInfo: "content_creator_credit_info",
    expiresIn: "expires_in",
  },
};

export const recipeRequestInternalSchema: Schema<RecipeRequest> = s.object<RecipeRequest>(
  recipeRequestProperties,
  { additionalProperties: s.json() },
);

export const recipeRequestSchema: Schema<RecipeRequest> = s.lazySchema(() =>
  s.object<RecipeRequest>(
    {
      ...recipeRequestProperties,
      imageUrl: s.optional(s.string().check(s.url())),
      servings: s.optional(s.int().check(s.gte(1))),
      contentCreatorCreditInfo: s.optional(s.lazy(() => contentCreatorCreditInfoSchema)),
      expiresIn: s.optional(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
