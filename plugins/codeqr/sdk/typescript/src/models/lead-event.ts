import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickSchema, type Click } from "./click.js";
import { customerSchema, type Customer } from "./customer.js";

export type LeadEvent = {
  /** @default "lead" */
  event?: "lead";
  timestamp?: string;
  eventId: string;
  eventName: string;
  click: Click;
  link?: Record<string, unknown>;
  customer: Customer;
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

export const leadEventSchema: Schema<LeadEvent> = s.object<LeadEvent>(
  {
    event: s.defaulted(s.literal("lead"), "lead"),
    timestamp: s.optional(s.string()),
    eventId: s.string(),
    eventName: s.string(),
    click: clickSchema,
    link: s.optional(s.record(s.string(), s.unknown())),
    customer: customerSchema,
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
      clickId: "click_id",
      linkId: "link_id",
    },
  },
  { additionalProperties: s.json() },
);
