import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type AppEvent1 = {
  /**
   * Specifies the unit represented by the value field. **Mutually exclusive with currency.**
   */
  unit?: Unit;
  /**
   * ISO 4217 currency for the value field. **Mutually exclusive with unit.**
   */
  currency: string;
  /** Globally unique id of the event. */
  id?: string;
  /** name of the event, e.g. level_success. */
  event?: string;
  /** additional information about the event. Can contain any key for dimensions. */
  dimensions?: Record<string, string>;
  /**
   * Specifies the numerical value for the set unit/currency, eg 1004 milliseconds, 1 count, or 5.99
   * USD. If both Unit and Currency are not set, value is always set to 0.
   */
  value?: number;
  /** ISO 3166-1 alpha-2 country code of where the event happened */
  countryCode?: string;
  /** when did the event happen? */
  happenedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const appEvent1Properties: s.Shape<AppEvent1> = {
  unit: s.optional(s.lazy(() => unitSchema)),
  currency: s.string(),
  id: s.optional(s.string()),
  event: s.optional(s.string()),
  dimensions: s.optional(s.record(s.string(), s.string())),
  value: s.optional(s.float64()),
  countryCode: s.optional(s.string()),
  happenedAt: s.optional(s.dateTime()),
};

export const appEvent1InternalSchema: Schema<AppEvent1> = s.object<AppEvent1>(appEvent1Properties, {
  additionalProperties: s.json(),
});

export const appEvent1Schema: Schema<AppEvent1> = s.lazySchema(() =>
  s.object<AppEvent1>(
    {
      ...appEvent1Properties,
      currency: s.string().check(s.minLength(3), s.maxLength(3)),
      event: s.optional(s.string().check(s.minLength(1))),
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
