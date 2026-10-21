import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type Page = {
  id: string;
  label?: string;
  cards: Card[];
};

export const pageSchema: Schema<Page> = s.object<Page>({
  id: s.string(),
  label: s.optional(s.string()),
  cards: s.array(s.lazy(() => cardSchema)),
});
