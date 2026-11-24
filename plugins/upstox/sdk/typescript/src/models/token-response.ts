import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeSchema, type Exchange } from "./exchange.js";
import { orderTypeSchema, type OrderType } from "./order-type.js";
import { productSchema, type Product } from "./product.js";

export type TokenResponse = {
  /** E-mail address of the user */
  email?: string;
  /** Lists the exchanges to which the user has access */
  exchanges?: Exchange[];
  /** Lists the products types to which the user has access */
  products?: Product[];
  /** The broker ID */
  broker?: string;
  /** Uniquely identifies the user */
  userId?: string;
  /** Name of the user */
  userName?: string;
  /** Order types enabled for the user */
  orderTypes?: OrderType[];
  /**
   * Identifies the user's registered role at the broker. This will be individual for all retail
   * users
   */
  userType?: string;
  /** To depict if the user has given power of attorney for transactions */
  poa?: boolean;
  /** Indicates if DDPI is enabled for trading */
  ddpi?: boolean;
  /** Whether the status of account is active or not */
  isActive?: boolean;
  /** The authentication token that is to used with every subsequent API requests */
  accessToken?: string;
  /**
   * An extended authentication token with a prolonged validity period, intended for specific API
   * requests. Ensure you use this token only with the designated set of APIs.
   */
  extendedToken?: string;
  /** The number of seconds until the access token expires */
  expiresIn?: number;
  /** The type of token */
  tokenType?: string;
  /** The refresh token that can be used to refresh the access token */
  refreshToken?: string;
  /** The number of seconds until the refresh token expires */
  refreshTokenExpiresIn?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>(
  {
    email: s.optional(s.string()),
    exchanges: s.optional(s.array(s.lazy(() => exchangeSchema))),
    products: s.optional(s.array(s.lazy(() => productSchema))),
    broker: s.optional(s.string()),
    userId: s.optional(s.string()),
    userName: s.optional(s.string()),
    orderTypes: s.optional(s.array(s.lazy(() => orderTypeSchema))),
    userType: s.optional(s.string()),
    poa: s.optional(s.boolean()),
    ddpi: s.optional(s.boolean()),
    isActive: s.optional(s.boolean()),
    accessToken: s.optional(s.string()),
    extendedToken: s.optional(s.string()),
    expiresIn: s.optional(s.int()),
    tokenType: s.optional(s.string()),
    refreshToken: s.optional(s.string()),
    refreshTokenExpiresIn: s.optional(s.int()),
    _keysMap: {
      userId: "user_id",
      userName: "user_name",
      orderTypes: "order_types",
      userType: "user_type",
      isActive: "is_active",
      accessToken: "access_token",
      extendedToken: "extended_token",
      expiresIn: "expires_in",
      tokenType: "token_type",
      refreshToken: "refresh_token",
      refreshTokenExpiresIn: "refresh_token_expires_in",
    },
  },
  { additionalProperties: s.json() },
);
