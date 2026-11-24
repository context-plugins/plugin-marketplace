import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeSchema, type Exchange } from "./exchange.js";
import { orderTypeSchema, type OrderType } from "./order-type.js";
import { productSchema, type Product } from "./product.js";

/** Response data for user profile */
export type ProfileData2 = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileData2Schema: Schema<ProfileData2> = s.object<ProfileData2>(
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
    _keysMap: {
      userId: "user_id",
      userName: "user_name",
      orderTypes: "order_types",
      userType: "user_type",
      isActive: "is_active",
    },
  },
  { additionalProperties: s.json() },
);
