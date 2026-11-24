import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PortfolioRemoveItemRequest = {
  /** The item to remove from the portfolio. */
  item: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfolioRemoveItemRequestSchema: Schema<PortfolioRemoveItemRequest> =
  s.object<PortfolioRemoveItemRequest>(
    {
      item: s.string(),
    },
    { additionalProperties: s.json() },
  );
