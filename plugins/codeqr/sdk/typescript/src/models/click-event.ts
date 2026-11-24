import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickSchema, type Click } from "./click.js";
import { linkInternalSchema, linkSchema, type Link } from "./link.js";

export type ClickEvent = {
  /** @default "click" */
  event?: "click";
  timestamp?: string;
  click: Click;
  link: Link;
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

const clickEventProperties: s.Shape<ClickEvent> = {
  event: s.defaulted(s.literal("click"), "click"),
  timestamp: s.optional(s.string()),
  click: clickSchema,
  link: linkInternalSchema,
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
};

export const clickEventInternalSchema: Schema<ClickEvent> = s.object<ClickEvent>(clickEventProperties, {
  additionalProperties: s.json(),
});

export const clickEventSchema: Schema<ClickEvent> = s.lazySchema(() =>
  s.object<ClickEvent>(
    {
      ...clickEventProperties,
      link: linkSchema,
    },
    { additionalProperties: s.json() },
  ),
);
