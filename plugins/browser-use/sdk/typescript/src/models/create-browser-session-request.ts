import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  browserScreenHeightInternalSchema,
  browserScreenHeightSchema,
  type BrowserScreenHeight,
} from "./unions/browser-screen-height.js";
import {
  browserScreenWidthInternalSchema,
  browserScreenWidthSchema,
  type BrowserScreenWidth,
} from "./unions/browser-screen-width.js";
import { customProxyInternalSchema, customProxySchema, type CustomProxy } from "./unions/custom-proxy.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { profileIdSchema, type ProfileId } from "./unions/profile-id.js";
import { proxyCountryCode1Schema, type ProxyCountryCode1 } from "./unions/proxy-country-code1.js";

/** Request model for creating a browser session. */
export type CreateBrowserSessionRequest = {
  /** The ID of the profile to use for the session */
  profileId?: ProfileId;
  /** Country code for proxy location. Defaults to US. Set to null to disable proxy. */
  proxyCountryCode?: ProxyCountryCode1;
  /**
   * Labels for this browser. Up to 10 key-value pairs. Filterable on the browsers list and in the
   * dashboard history.
   */
  metadata?: Metadata;
  /**
   * The timeout for the session in minutes. All users can use up to 240 minutes (4 hours). Browser
   * sessions are charged $0.02/hour.
   *
   * @default 60
   */
  timeout?: number;
  /** Custom screen width in pixels for the browser. */
  browserScreenWidth?: BrowserScreenWidth;
  /** Custom screen height in pixels for the browser. */
  browserScreenHeight?: BrowserScreenHeight;
  /**
   * Whether to allow the browser to be resized during the session (not recommended since it reduces
   * stealthiness).
   *
   * @default false
   */
  allowResizing?: boolean;
  /**
   * Whether Chrome renders PDFs in a tab. Set to false to stop the in-tab render; the file is saved
   * to the session's download directory either way.
   *
   * @default true
   */
  pdfRendererEnabled?: boolean;
  /**
   * Whether the browser detects and solves CAPTCHAs on its own. Set to false to handle CAPTCHAs
   * yourself. Defaults to true.
   *
   * @default true
   */
  solveCaptchas?: boolean;
  /** Custom proxy settings to use for the session. If not provided, our proxies will be used. */
  customProxy?: CustomProxy;
  /** If True, enables session recording. Defaults to False. @default false */
  enableRecording?: boolean;
  /** Up to 3 ready extensions from POST /api/v4/extensions to install before the browser starts. */
  extensionIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createBrowserSessionRequestProperties: s.Shape<CreateBrowserSessionRequest> = {
  profileId: s.optional(s.lazy(() => profileIdSchema)),
  proxyCountryCode: s.optional(s.lazy(() => proxyCountryCode1Schema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  timeout: s.defaulted(s.int(), 60),
  browserScreenWidth: s.optional(s.lazy(() => browserScreenWidthInternalSchema)),
  browserScreenHeight: s.optional(s.lazy(() => browserScreenHeightInternalSchema)),
  allowResizing: s.defaulted(s.boolean(), false),
  pdfRendererEnabled: s.defaulted(s.boolean(), true),
  solveCaptchas: s.defaulted(s.boolean(), true),
  customProxy: s.optional(s.lazy(() => customProxyInternalSchema)),
  enableRecording: s.defaulted(s.boolean(), false),
  extensionIds: s.optional(s.array(s.string())),
};

export const createBrowserSessionRequestInternalSchema: Schema<CreateBrowserSessionRequest> =
  s.object<CreateBrowserSessionRequest>(createBrowserSessionRequestProperties, {
    additionalProperties: s.json(),
  });

export const createBrowserSessionRequestSchema: Schema<CreateBrowserSessionRequest> = s.lazySchema(() =>
  s.object<CreateBrowserSessionRequest>(
    {
      ...createBrowserSessionRequestProperties,
      browserScreenWidth: s.optional(s.lazy(() => browserScreenWidthSchema)),
      browserScreenHeight: s.optional(s.lazy(() => browserScreenHeightSchema)),
      customProxy: s.optional(s.lazy(() => customProxySchema)),
      extensionIds: s.optional(s.array(s.string()).check(s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
