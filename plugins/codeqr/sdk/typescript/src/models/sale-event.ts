import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickSchema, type Click } from "./click.js";
import { customer1InternalSchema, customer1Schema, type Customer1 } from "./customer1.js";
import { linkInternalSchema, linkSchema, type Link } from "./link.js";
import { saleInternalSchema, saleSchema, type Sale } from "./sale.js";

export type SaleEvent = {
  /** @default "sale" */
  event?: "sale";
  timestamp?: string;
  eventId: string;
  eventName: string;
  link: Link;
  click: Click;
  customer: Customer1;
  sale: Sale;
  /**
   * Deprecated. Use `sale.amount` instead.
   *
   * @deprecated
   */
  saleAmount: number;
  /**
   * Deprecated. Use `sale.invoiceId` instead.
   *
   * @deprecated
   */
  invoiceId: string;
  /** Deprecated. Use `sale.paymentProcessor` instead. */
  paymentProcessor: string;
  metadata: string;
  /**
   * Deprecated. Use `click.id` instead.
   *
   * @deprecated
   */
  clickId: string;
  /**
   * Deprecated. Use `link.id` instead.
   *
   * @deprecated
   */
  linkId: string;
  /**
   * Deprecated. Use `link.domain` instead.
   *
   * @deprecated
   */
  domain: string;
  /**
   * Deprecated. Use `link.key` instead.
   *
   * @deprecated
   */
  key: string;
  /**
   * Deprecated. Use `click.url` instead.
   *
   * @deprecated
   */
  url: string;
  /**
   * Deprecated. Use `click.continent` instead.
   *
   * @deprecated
   */
  continent: string;
  /**
   * Deprecated. Use `click.country` instead.
   *
   * @deprecated
   */
  country: string;
  /**
   * Deprecated. Use `click.city` instead.
   *
   * @deprecated
   */
  city: string;
  /**
   * Deprecated. Use `click.device` instead.
   *
   * @deprecated
   */
  device: string;
  /**
   * Deprecated. Use `click.browser` instead.
   *
   * @deprecated
   */
  browser: string;
  /**
   * Deprecated. Use `click.os` instead.
   *
   * @deprecated
   */
  os: string;
  /**
   * Deprecated. Use `click.qr` instead.
   *
   * @deprecated
   */
  type: string;
  /**
   * Deprecated. Use `click.ip` instead.
   *
   * @deprecated
   */
  ip: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const saleEventProperties: s.Shape<SaleEvent> = {
  event: s.defaulted(s.literal("sale"), "sale"),
  timestamp: s.optional(s.string()),
  eventId: s.string(),
  eventName: s.string(),
  link: linkInternalSchema,
  click: clickSchema,
  customer: customer1InternalSchema,
  sale: saleInternalSchema,
  saleAmount: s.float64(),
  invoiceId: s.string(),
  paymentProcessor: s.string(),
  metadata: s.string(),
  clickId: s.string(),
  linkId: s.string(),
  domain: s.string(),
  key: s.string(),
  url: s.string(),
  continent: s.string(),
  country: s.string(),
  city: s.string(),
  device: s.string(),
  browser: s.string(),
  os: s.string(),
  type: s.string(),
  ip: s.string(),
  _keysMap: {
    invoiceId: "invoice_id",
    paymentProcessor: "payment_processor",
    clickId: "click_id",
    linkId: "link_id",
  },
};

export const saleEventInternalSchema: Schema<SaleEvent> = s.object<SaleEvent>(saleEventProperties, {
  additionalProperties: s.json(),
});

export const saleEventSchema: Schema<SaleEvent> = s.lazySchema(() =>
  s.object<SaleEvent>(
    {
      ...saleEventProperties,
      link: linkSchema,
      customer: customer1Schema,
      sale: saleSchema,
    },
    { additionalProperties: s.json() },
  ),
);
