import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links26Schema, type Links26 } from "./links26.js";

/** Create re-auth exchange session with redirect URL (required for mobile sessions with Plaid) */
export type CreateReAuthExchangeSessionWithRedirect = {
  links: Links26;
};

export const createReAuthExchangeSessionWithRedirectSchema: Schema<CreateReAuthExchangeSessionWithRedirect> =
  s.object<CreateReAuthExchangeSessionWithRedirect>({
    links: links26Schema,
    _keysMap: {
      links: "_links",
    },
  });
