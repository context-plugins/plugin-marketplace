import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { frameTextStylesSchema, type FrameTextStyles } from "./frame-text-styles.js";
import { ruleSchema, type Rule } from "./rule.js";
import { tagSchema, type Tag } from "./tag.js";
import { typeCodeqrIoQrCodesApiSchema, type TypeCodeqrIoQrCodesApi } from "./type-codeqr-io-qr-codes-api.js";
import { whatsappInternalSchema, whatsappSchema, type Whatsapp } from "./whatsapp.js";

export type QrCode = {
  /** The unique ID of the QR code. */
  id: string;
  /**
   * The domain of the QR code. If not provided, the main domain of the project will be used (or
   * `codeqr.link` if the project does not have domains).
   */
  domain: string;
  /** The slug of the QR code. If not provided, a random slug of 7 characters will be generated. */
  key: string;
  /** If the QR code is archived. @default false */
  archived?: boolean;
  /** The date and time the QR code will expire in ISO-8601 format. Must be in the future. */
  expiresAt: string | null;
  /** The destination URL when the QR code expires. */
  expiredUrl: string | null;
  /** The password required to access the destination URL of the QR code. */
  password: string | null;
  /** The external ID associated with the QR code. */
  externalId: string | null;
  /** [BETA] If should track conversions for the QR code. @default false */
  trackConversion?: boolean;
  /** If the QR code uses the custom link preview feature. @default false */
  proxy?: boolean;
  /**
   * The title of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom link
   * preview if `proxy` is true.
   */
  title: string | null;
  /**
   * The description of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom
   * link preview if `proxy` is true.
   */
  description: string | null;
  /**
   * The image of the QR code generated via `api.codeqr.io/metatags`. Will be used for custom link
   * preview if `proxy` is true.
   */
  image: string | null;
  /** The source UTM of the QR code. */
  utmSource: string | null;
  /** The medium UTM of the QR code. */
  utmMedium: string | null;
  /** The campaign UTM of the QR code. */
  utmCampaign: string | null;
  /** The term UTM of the QR code. */
  utmTerm: string | null;
  /** The content UTM of the QR code. */
  utmContent: string | null;
  /** If the QR code uses link cloaking. @default false */
  rewrite?: boolean;
  /** If the QR code should be indexed. @default false */
  doIndex?: boolean;
  /** If the QR code is flexible. @default false */
  flexible?: boolean;
  /** If the QR code is filled. @default false */
  filled?: boolean;
  /** The destination URL for iOS for the QR code for device targeting iOS. */
  ios: string | null;
  /** The destination URL for Android for the QR code for device targeting Android. */
  android: string | null;
  /**
   * Geographic segmentation information for the QR code in the JSON format `{[COUNTRY]:
   * https://example.com }`. Learn more: https://codeqr.link/geo
   */
  geo: Record<string, string> | null;
  /** Smart rules for conditional destination routing by request attribute. */
  rules: Rule[] | null;
  /** If the QR code is static. @default false */
  static?: boolean;
  /**
   * For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page
   * with buttons. If false, redirects directly to tel:/mailto:/sms: URI.
   *
   * @default true
   */
  useDisplayPage?: boolean;
  /** The type of the QR code. */
  type: TypeCodeqrIoQrCodesApi;
  /** The static content of the QR code. */
  contentStatic: string | null;
  /** The text of the QR code. */
  text: string | null;
  /** The email information of the QR code. */
  email: Record<string, string> | null;
  /** The WiFi information of the QR code. */
  wifi: Record<string, string> | null;
  /** The URL of the QR code. */
  url: string | null;
  /** The phone number of the QR code. */
  phone: string | null;
  /** The vCard information of the QR code. */
  vcard: Record<string, string> | null;
  /** The cryptocurrency information of the QR code. */
  crypto: Record<string, string> | null;
  /** The SMS information of the QR code. */
  sms: Record<string, string> | null;
  /** The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message. */
  whatsapp: Whatsapp | null;
  /** The FaceTime information of the QR code. */
  facetime: Record<string, string> | null;
  /** The latitude and longitude information of the QR code. */
  latlog: Record<string, string> | null;
  /** The logo of the QR code. */
  logo: string | null;
  /** The background color of the QR code. */
  bgColor: string;
  /** The foreground color of the QR code. */
  fgColor: string;
  /** The size of the QR code. */
  size: number;
  /** The level of error correction of the QR code. */
  level: string;
  /** If the logo should be displayed in the QR code. @default false */
  showLogo?: boolean;
  /** The source of the QR code. */
  src: string | null;
  /** The height of the QR code. */
  height: number;
  /** The width of the QR code. */
  width: number;
  /** If the QR code should be excavated. @default false */
  excavate?: boolean;
  /** The ID of the user that created the QR code. */
  userId: string | null;
  /** The ID of the project of the QR code. */
  projectId: string | null;
  /** If the statistics of the QR code are publicly accessible. @default false */
  publicStats?: boolean;
  /** The number of scans of the QR code. @default 0 */
  scans?: number;
  /** The date and time the QR code was scanned last. */
  lastClicked: string | null;
  /** The number of leads generated by the QR code. @default 0 */
  leads?: number;
  /** The number of sales generated by the QR code. @default 0 */
  sales?: number;
  /** The amount of the sale generated by the link. @default 0 */
  saleAmount?: number;
  /** The date and time the QR code was created. */
  createdAt: string;
  /** The date and time the QR code was updated last. */
  updatedAt: string;
  /**
   * [DEPRECATED (use `tags` instead)]: The unique ID of the tag assigned to the QR code.
   *
   * @deprecated
   */
  tagId: string | null;
  /** The tags assigned to the QR code. */
  tags: Tag[] | null;
  /** The unique ID of the folder assigned to the QR code. */
  folderId: string | null;
  /** The comments for the QR code. */
  comments: string | null;
  /**
   * Typographic styles applied to the frame label text. Object with optional keys: `weight`
   * (`normal` | `bold`), `style` (`normal` | `italic`), `family` (`sans` | `sans-condensed` |
   * `serif` | `serif-elegant` | `mono`), `size` (`s` | `m` | `l` | `xl`). Every field is enum-gated
   * on write; omitted keys render with defaults.
   */
  frameTextStyles?: FrameTextStyles | null;
  /** The notification token of the QR code. */
  notificationToken: string | null;
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

const qrCodeProperties: s.Shape<QrCode> = {
  id: s.string(),
  domain: s.string(),
  key: s.string(),
  archived: s.defaulted(s.boolean(), false),
  expiresAt: s.nullable(s.string()),
  expiredUrl: s.nullable(s.string()),
  password: s.nullable(s.string()),
  externalId: s.nullable(s.string()),
  trackConversion: s.defaulted(s.boolean(), false),
  proxy: s.defaulted(s.boolean(), false),
  title: s.nullable(s.string()),
  description: s.nullable(s.string()),
  image: s.nullable(s.string()),
  utmSource: s.nullable(s.string()),
  utmMedium: s.nullable(s.string()),
  utmCampaign: s.nullable(s.string()),
  utmTerm: s.nullable(s.string()),
  utmContent: s.nullable(s.string()),
  rewrite: s.defaulted(s.boolean(), false),
  doIndex: s.defaulted(s.boolean(), false),
  flexible: s.defaulted(s.boolean(), false),
  filled: s.defaulted(s.boolean(), false),
  ios: s.nullable(s.string()),
  android: s.nullable(s.string()),
  geo: s.nullable(s.record(s.string(), s.string())),
  rules: s.nullable(s.array(s.lazy(() => ruleSchema))),
  static: s.defaulted(s.boolean(), false),
  useDisplayPage: s.defaulted(s.boolean(), true),
  type: typeCodeqrIoQrCodesApiSchema,
  contentStatic: s.nullable(s.string()),
  text: s.nullable(s.string()),
  email: s.nullable(s.record(s.string(), s.string())),
  wifi: s.nullable(s.record(s.string(), s.string())),
  url: s.nullable(s.string()),
  phone: s.nullable(s.string()),
  vcard: s.nullable(s.record(s.string(), s.string())),
  crypto: s.nullable(s.record(s.string(), s.string())),
  sms: s.nullable(s.record(s.string(), s.string())),
  whatsapp: s.nullable(s.lazy(() => whatsappInternalSchema)),
  facetime: s.nullable(s.record(s.string(), s.string())),
  latlog: s.nullable(s.record(s.string(), s.string())),
  logo: s.nullable(s.string()),
  bgColor: s.string(),
  fgColor: s.string(),
  size: s.float64(),
  level: s.string(),
  showLogo: s.defaulted(s.boolean(), false),
  src: s.nullable(s.string()),
  height: s.float64(),
  width: s.float64(),
  excavate: s.defaulted(s.boolean(), false),
  userId: s.nullable(s.string()),
  projectId: s.nullable(s.string()),
  publicStats: s.defaulted(s.boolean(), false),
  scans: s.defaulted(s.float64(), 0),
  lastClicked: s.nullable(s.string()),
  leads: s.defaulted(s.float64(), 0),
  sales: s.defaulted(s.float64(), 0),
  saleAmount: s.defaulted(s.float64(), 0),
  createdAt: s.string(),
  updatedAt: s.string(),
  tagId: s.nullable(s.string()),
  tags: s.nullable(s.array(s.lazy(() => tagSchema))),
  folderId: s.nullable(s.string()),
  comments: s.nullable(s.string()),
  frameTextStyles: s.optionalNullable(s.lazy(() => frameTextStylesSchema)),
  notificationToken: s.nullable(s.string()),
  preRedirection: s.defaulted(s.boolean(), false),
  pageId: s.optionalNullable(s.string()),
  pageUrl: s.optionalNullable(s.string()),
  isFormMandatory: s.defaulted(s.boolean(), false),
  _keysMap: {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  },
};

export const qrCodeInternalSchema: Schema<QrCode> = s.object<QrCode>(qrCodeProperties, {
  additionalProperties: s.json(),
});

export const qrCodeSchema: Schema<QrCode> = s.lazySchema(() =>
  s.object<QrCode>(
    {
      ...qrCodeProperties,
      whatsapp: s.nullable(s.lazy(() => whatsappSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
