import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { frameTextStyles1Schema, type FrameTextStyles1 } from "./frame-text-styles1.js";
import { geoCodeqrIoQrCodesApiSchema, type GeoCodeqrIoQrCodesApi } from "./geo-codeqr-io-qr-codes-api.js";
import { rule1InternalSchema, rule1Schema, type Rule1 } from "./rule1.js";
import { type1Schema, type Type1 } from "./type1.js";
import { tagIdsSchema, type TagIds } from "./unions/tag-ids.js";
import { tagNamesSchema, type TagNames } from "./unions/tag-names.js";
import { whatsappInternalSchema, whatsappSchema, type Whatsapp } from "./whatsapp.js";

export type QrcodesBulkRequest = {
  /**
   * The domain of the QR code. If not provided, the main domain of the project will be used (or
   * `codeqr.link` if the project does not have domains).
   */
  domain?: string;
  /** The slug of the QR code. If not provided, a random slug of 7 characters will be generated. */
  key?: string;
  /**
   * The prefix for the randomly generated key. If provided, the key will be prefixed with this
   * value.
   */
  prefix?: string;
  /**
   * This is the ID of the QR code in your database. If defined, it can be used to identify the QR
   * code in the future. It must be prefixed with `ext_` when passed as a query parameter.
   */
  externalId?: string | null;
  /** If should track conversions for the QR code. @default false */
  trackConversion?: boolean;
  /**
   * ID of a QR code (in the same project) marked as a template. Its customization fields (colors,
   * logo, pattern, shape, frame) will be applied to the new QR code unless explicitly overridden.
   */
  templateId?: string | null;
  /** Whether this QR code should be used as a reusable template. @default false */
  useAsTemplate?: boolean;
  /** If the QR code is archived. @default false */
  archived?: boolean;
  /** The date and time the QR code will expire in ISO-8601 format. Must be in the future. */
  expiresAt?: Date | null;
  /** The URL to redirect when the QR code expires. */
  expiredUrl?: string | null;
  /** The password required to access the destination URL of the QR code. */
  password?: string | null;
  /** If the QR code uses the custom link preview feature. @default false */
  proxy?: boolean;
  /**
   * The title of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom link
   * preview if `proxy` is true.
   */
  title?: string | null;
  /**
   * The description of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom
   * link preview if `proxy` is true.
   */
  description?: string | null;
  /**
   * The image of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom link
   * preview if `proxy` is true.
   */
  image?: string | null;
  /** If the QR code uses link cloaking. @default false */
  rewrite?: boolean;
  /** The destination URL for iOS for the QR code for device targeting iOS. */
  ios?: string | null;
  /** The destination URL for Android for the QR code for device targeting Android. */
  android?: string | null;
  /**
   * Geographic segmentation information for the QR code in the JSON format `{[COUNTRY]:
   * https://example.com }`.
   */
  geo?: GeoCodeqrIoQrCodesApi | null;
  /** Smart rules for conditional destination routing by request attribute. */
  rules?: Rule1[] | null;
  /**
   * Allow search engines to index your QR code. The default is `false` if not provided. Learn more:
   * https://codeqr.link/noindex
   *
   * @default false
   */
  doIndex?: boolean;
  /**
   * An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click
   * event data.
   */
  webhookIds?: string[] | null;
  /** If the statistics of the QR code are publicly accessible. @default false */
  publicStats?: boolean;
  /**
   * The unique ID of the tag assigned to the QR code. This field is deprecated – use `tagIds`
   * instead.
   *
   * @deprecated
   */
  tagId?: string | null;
  /** The unique IDs of the tags assigned to the QR code. */
  tagIds?: TagIds;
  /** The unique name of the tags assigned to the QR code (case insensitive). */
  tagNames?: TagNames;
  /** The unique ID of the folder assigned to the QR code. Omit or set to null for no folder. */
  folderId?: string | null;
  /** The comments for the QR code. */
  comments?: string | null;
  /** If the QR code is flexible. @default false */
  flexible?: boolean;
  /** If the QR code is filled. @default false */
  filled?: boolean;
  /** If the QR code is static. @default false */
  static?: boolean;
  /**
   * For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page
   * with buttons. If false, redirects directly to tel:/mailto:/sms: URI.
   *
   * @default true
   */
  useDisplayPage?: boolean;
  /** The type of content of the QR code. */
  type: Type1;
  /** The text of the QR code. */
  text?: string | null;
  /** The email information of the QR code. */
  email?: Record<string, string> | null;
  /** The WiFi information of the QR code. */
  wifi?: Record<string, string> | null;
  /** The destination URL of the QR code. */
  url?: string | null;
  /** The phone number of the QR code. */
  phone?: string | null;
  /** The vCard information of the QR code. */
  vcard?: Record<string, string> | null;
  /** The cryptocurrency information of the QR code. */
  crypto?: Record<string, string> | null;
  /** The SMS information of the QR code. */
  sms?: Record<string, string> | null;
  /** The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message. */
  whatsapp?: Whatsapp | null;
  /** The FaceTime information of the QR code. */
  facetime?: Record<string, string> | null;
  /** The latitude and longitude information of the QR code. */
  latlog?: Record<string, string> | null;
  /** The Pix information of the QR code (key, name, city, amount, description). */
  pix?: Record<string, unknown>;
  /** The logo of the QR code. */
  logo?: string | null;
  /**
   * The background color of the QR code (hex or CSS keyword). Invalid values are coerced to
   * default.
   *
   * @default "#ffffff"
   */
  bgColor?: string;
  /**
   * The foreground color of the QR code (hex or CSS keyword). Invalid values are coerced to
   * default.
   *
   * @default "#000000"
   */
  fgColor?: string;
  /** The size of the QR code. @default 1024 */
  size?: number;
  /** The level of error correction of the QR code. @default "M" */
  level?: string;
  /** If the logo should be displayed in the QR code. @default true */
  showLogo?: boolean;
  /** The image URL of the QR code. */
  src?: string | null;
  /**
   * Logo height in pixels. When omitted, a proportional size is used based on the QR code size
   * (about 10–20% depending on size).
   */
  height?: number;
  /**
   * Logo width in pixels. When omitted, a proportional size is used based on the QR code size
   * (about 10–20% depending on size).
   */
  width?: number;
  /** If the QR code should have excavated areas. @default true */
  excavate?: boolean;
  /** The pattern of the modules of the QR code. @default "default" */
  pattern?: string;
  /** The shape of the design around the QR code (none, square, circle). @default "none" */
  shape?: string;
  /**
   * The type of frame of the QR code (e.g. none, frame-1, frame-2, frame-3, frame-5, frame-6).
   * frame-5/6 are top-bar variants. Unknown ids fall back to no frame at render.
   *
   * @default "none"
   */
  frame?: string;
  /**
   * The color of the frame (hex or CSS keyword). Invalid values are coerced to default.
   *
   * @default "#000000"
   */
  frameColor?: string;
  /**
   * Label text rendered inside the frame (e.g. "SCAN ME", a product SKU). Maximum 200 characters.
   * Word-wraps to multiple lines at larger sizes; the frame bar grows vertically to fit.
   */
  frameText?: string;
  /**
   * Color of the frame label text (hex `#RRGGBB`, `#RGB`, `#RRGGBBAA`, or a CSS keyword from the
   * allowlist). When omitted, a contrasting color is derived automatically from `frameColor`.
   */
  frameTextColor?: string | null;
  /**
   * Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or
   * out-of-enum values are rejected to prevent SVG attribute injection. All fields are optional;
   * omitted keys fall back to the default (normal weight, normal style, sans family, medium size).
   */
  frameTextStyles?: FrameTextStyles1 | null;
  /** If the QR code has pre-redirection. @default false */
  preRedirection?: boolean;
  /** The ID of the page to redirect to before the QR code destination. */
  pageId?: string | null;
  /** The URL of the page to redirect to before the QR code destination. */
  pageUrl?: string | null;
  /** If the form is mandatory for the page. @default false */
  isFormMandatory?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qrcodesBulkRequestProperties: s.Shape<QrcodesBulkRequest> = {
  domain: s.optional(s.string()),
  key: s.optional(s.string()),
  prefix: s.optional(s.string()),
  externalId: s.optionalNullable(s.string()),
  trackConversion: s.defaulted(s.boolean(), false),
  templateId: s.optionalNullable(s.string()),
  useAsTemplate: s.defaulted(s.boolean(), false),
  archived: s.defaulted(s.boolean(), false),
  expiresAt: s.optionalNullable(s.dateTime()),
  expiredUrl: s.optionalNullable(s.string()),
  password: s.optionalNullable(s.string()),
  proxy: s.defaulted(s.boolean(), false),
  title: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  image: s.optionalNullable(s.string()),
  rewrite: s.defaulted(s.boolean(), false),
  ios: s.optionalNullable(s.string()),
  android: s.optionalNullable(s.string()),
  geo: s.optionalNullable(s.lazy(() => geoCodeqrIoQrCodesApiSchema)),
  rules: s.optionalNullable(s.array(s.lazy(() => rule1InternalSchema))),
  doIndex: s.defaulted(s.boolean(), false),
  webhookIds: s.optionalNullable(s.array(s.string())),
  publicStats: s.defaulted(s.boolean(), false),
  tagId: s.optionalNullable(s.string()),
  tagIds: s.optional(s.lazy(() => tagIdsSchema)),
  tagNames: s.optional(s.lazy(() => tagNamesSchema)),
  folderId: s.optionalNullable(s.string()),
  comments: s.optionalNullable(s.string()),
  flexible: s.defaulted(s.boolean(), false),
  filled: s.defaulted(s.boolean(), false),
  static: s.defaulted(s.boolean(), false),
  useDisplayPage: s.defaulted(s.boolean(), true),
  type: type1Schema,
  text: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.record(s.string(), s.string())),
  wifi: s.optionalNullable(s.record(s.string(), s.string())),
  url: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  vcard: s.optionalNullable(s.record(s.string(), s.string())),
  crypto: s.optionalNullable(s.record(s.string(), s.string())),
  sms: s.optionalNullable(s.record(s.string(), s.string())),
  whatsapp: s.optionalNullable(s.lazy(() => whatsappInternalSchema)),
  facetime: s.optionalNullable(s.record(s.string(), s.string())),
  latlog: s.optionalNullable(s.record(s.string(), s.string())),
  pix: s.optional(s.record(s.string(), s.unknown())),
  logo: s.optionalNullable(s.string()),
  bgColor: s.defaulted(s.string(), "#ffffff"),
  fgColor: s.defaulted(s.string(), "#000000"),
  size: s.defaulted(s.float64(), 1024),
  level: s.defaulted(s.string(), "M"),
  showLogo: s.defaulted(s.boolean(), true),
  src: s.optionalNullable(s.string()),
  height: s.optional(s.float64()),
  width: s.optional(s.float64()),
  excavate: s.defaulted(s.boolean(), true),
  pattern: s.defaulted(s.string(), "default"),
  shape: s.defaulted(s.string(), "none"),
  frame: s.defaulted(s.string(), "none"),
  frameColor: s.defaulted(s.string(), "#000000"),
  frameText: s.optional(s.string()),
  frameTextColor: s.optionalNullable(s.string()),
  frameTextStyles: s.optionalNullable(s.lazy(() => frameTextStyles1Schema)),
  preRedirection: s.defaulted(s.boolean(), false),
  pageId: s.optionalNullable(s.string()),
  pageUrl: s.optionalNullable(s.string()),
  isFormMandatory: s.defaulted(s.boolean(), false),
};

export const qrcodesBulkRequestInternalSchema: Schema<QrcodesBulkRequest> = s.object<QrcodesBulkRequest>(
  qrcodesBulkRequestProperties,
  { additionalProperties: s.json() },
);

export const qrcodesBulkRequestSchema: Schema<QrcodesBulkRequest> = s.lazySchema(() =>
  s.object<QrcodesBulkRequest>(
    {
      ...qrcodesBulkRequestProperties,
      externalId: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      rules: s.optionalNullable(s.array(s.lazy(() => rule1Schema)).check(s.maxLength(20))),
      whatsapp: s.optionalNullable(s.lazy(() => whatsappSchema)),
      frameText: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
