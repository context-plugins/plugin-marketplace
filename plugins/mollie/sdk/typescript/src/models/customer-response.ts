import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links42Schema, type Links42 } from "./links42.js";
import { localeResponse4Schema, type LocaleResponse4 } from "./locale-response4.js";
import { modeSchema, type Mode } from "./mode.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

export type CustomerResponse = {
  /**
   * Indicates the response contains a customer object. Will always contain the string `customer`
   * for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this customer. Example: `cst_vsKJpSsabw`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /** The full name of the customer. */
  name: string | null;
  /**
   * The email address of the customer.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email: string | null;
  /**
   * Preconfigure the language to be used in the hosted payment pages shown to the customer. Should
   * only be provided if absolutely necessary. If not provided, the browser language will be used
   * which is typically highly accurate.
   */
  locale: LocaleResponse4 | null;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata: Metadata | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links42;
};

export const customerResponseSchema: Schema<CustomerResponse> = s.object<CustomerResponse>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  name: s.nullable(s.string()),
  email: s.nullable(s.string()),
  locale: s.nullable(s.lazy(() => localeResponse4Schema)),
  metadata: s.nullable(s.lazy(() => metadataSchema)),
  createdAt: s.string(),
  testmode: s.optionalNullable(s.boolean()),
  links: links42Schema,
  _keysMap: {
    links: "_links",
  },
});
