import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links34Schema, type Links34 } from "./links34.js";
import { modeSchema, type Mode } from "./mode.js";
import { terminalBrandSchema, type TerminalBrand } from "./terminal-brand.js";
import { terminalModelSchema, type TerminalModel } from "./terminal-model.js";
import { terminalStatusSchema, type TerminalStatus } from "./terminal-status.js";

export type ListEntityTerminal = {
  /**
   * Indicates the response contains a terminal object. Will always contain the string `terminal`
   * for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this terminal. Example: `term_7MgL4wea46qkRcoTZjWEH`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * A short description of the terminal. The description can be used as an identifier for the
   * terminal. Currently, the description is set when the terminal is initially configured. It will
   * be visible in the Mollie Dashboard, and it may be visible on the device itself depending on the
   * device.
   */
  description: string;
  status: TerminalStatus;
  /** The brand of the terminal. */
  brand: TerminalBrand | null;
  /** The model of the terminal. For example for a PAX A920, this field's value will be `A920`. */
  model: TerminalModel | null;
  /** The serial number of the terminal. The serial number is provided at terminal creation time. */
  serialNumber: string | null;
  /**
   * The currency configured on the terminal, in ISO 4217 format. Currently most of our terminals
   * are bound to a specific currency, chosen during setup.
   */
  currency: string;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` must not be
   * sent in the creation request. For organization-level credentials such as OAuth access tokens
   * however, the `profileId` parameter is required.
   */
  profileId: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  updatedAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links34;
};

export const listEntityTerminalSchema: Schema<ListEntityTerminal> = s.object<ListEntityTerminal>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  description: s.string(),
  status: terminalStatusSchema,
  brand: s.nullable(s.lazy(() => terminalBrandSchema)),
  model: s.nullable(s.lazy(() => terminalModelSchema)),
  serialNumber: s.nullable(s.string()),
  currency: s.string(),
  profileId: s.string(),
  createdAt: s.string(),
  updatedAt: s.string(),
  links: links34Schema,
  _keysMap: {
    links: "_links",
  },
});
