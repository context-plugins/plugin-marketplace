import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  instagramConnectionMethodBundleSocialSocialAccountApiSchema,
  type InstagramConnectionMethodBundleSocialSocialAccountApi,
} from "./instagram-connection-method-bundle-social-social-account-api.js";
import { typeSchema, type Type } from "./type.js";

export type ApiV1SocialAccountConnectRequest = {
  type: Type;
  teamId: string;
  /**
   * Client-provided return URL. After the OAuth flow completes (success or error), the user will be
   * redirected here with success/error query params appended. Must be a well-formed http/https URL.
   */
  redirectUrl: string;
  /**
   * Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g.
   * https://mastodon.social). Optional for Bluesky - omit it to use the default issuer
   * https://bsky.social, or pass a custom PDS/entryway issuer.
   */
  serverUrl?: string;
  /**
   * Optional. When true, adds provider-specific flags to avoid automatic login/auto-approval where
   * supported.
   *
   * @default false
   */
  disableAutoLogin?: boolean;
  /**
   * Optional and experimental. TikTok only. When true, routes authorization through TikTok logout
   * to request a fresh login session.
   *
   * @default false
   */
  tiktokForceLogin?: boolean;
  /**
   * Optional. Instagram direct OAuth only. When true, Instagram asks for a fresh login instead of
   * reusing the account logged in on that browser. In the hosted portal it applies only on
   * iPhone/iPad. Staying in the browser on iOS is the default for every connection and needs no
   * flag.
   *
   * @default false
   */
  forceBrowserOAuth?: boolean;
  /** Instagram only - connection method */
  instagramConnectionMethod?: InstagramConnectionMethodBundleSocialSocialAccountApi;
  /**
   * Facebook and Instagram: include business_management, ads_management, ads_read scopes. YouTube:
   * include the monetary analytics scope (enables revenue/monetization data).
   *
   * @default false
   */
  withBusinessScope?: boolean;
  /**
   * Facebook and Instagram: include the Meta messaging (DM) scopes. Ignored unless messaging is
   * enabled for your organization.
   *
   * @default false
   */
  withMessagingScope?: boolean;
  /**
   * Re-authorize the account already connected to this team in place: tokens and permissions are
   * refreshed while the account, its posts and scheduled destinations stay. The user must log in
   * with the same account. Currently supported for Instagram connected with
   * instagramConnectionMethod INSTAGRAM.
   *
   * @default false
   */
  reconnect?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SocialAccountConnectRequestProperties: s.Shape<ApiV1SocialAccountConnectRequest> = {
  type: typeSchema,
  teamId: s.string(),
  redirectUrl: s.string(),
  serverUrl: s.optional(s.string()),
  disableAutoLogin: s.defaulted(s.boolean(), false),
  tiktokForceLogin: s.defaulted(s.boolean(), false),
  forceBrowserOAuth: s.defaulted(s.boolean(), false),
  instagramConnectionMethod: s.optional(
    s.lazy(() => instagramConnectionMethodBundleSocialSocialAccountApiSchema),
  ),
  withBusinessScope: s.defaulted(s.boolean(), false),
  withMessagingScope: s.defaulted(s.boolean(), false),
  reconnect: s.defaulted(s.boolean(), false),
};

export const apiV1SocialAccountConnectRequestInternalSchema: Schema<ApiV1SocialAccountConnectRequest> =
  s.object<ApiV1SocialAccountConnectRequest>(apiV1SocialAccountConnectRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1SocialAccountConnectRequestSchema: Schema<ApiV1SocialAccountConnectRequest> = s.lazySchema(
  () =>
    s.object<ApiV1SocialAccountConnectRequest>(
      {
        ...apiV1SocialAccountConnectRequestProperties,
        redirectUrl: s.string().check(s.url()),
        serverUrl: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
);
