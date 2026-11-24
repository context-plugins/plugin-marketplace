import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  instagramConnectionMethodBundleSocialSocialAccountApiSchema,
  type InstagramConnectionMethodBundleSocialSocialAccountApi,
} from "./instagram-connection-method-bundle-social-social-account-api.js";
import { Language, languageSchema } from "./language.js";
import {
  socialAccountTypeBundleSocialOrganizationApiSchema,
  type SocialAccountTypeBundleSocialOrganizationApi,
} from "./social-account-type-bundle-social-organization-api.js";

export type ApiV1SocialAccountCreatePortalLinkRequest = {
  teamId: string;
  redirectUrl?: string;
  socialAccountTypes: SocialAccountTypeBundleSocialOrganizationApi[];
  /**
   * Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g.
   * https://mastodon.social). Optional for Bluesky - omit it to use the default issuer
   * https://bsky.social, or pass a custom PDS/entryway issuer.
   */
  serverUrl?: string;
  /**
   * Optional. If true, portal will request provider-specific anti-auto-login behavior where
   * supported.
   *
   * @default false
   */
  disableAutoLogin?: boolean;
  /**
   * Optional and experimental. TikTok only. When true, portal routes TikTok authorization through
   * logout to request a fresh login session.
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
   * Optional. Facebook and Instagram only - when provided, portal skips business scope selection
   * modal for Facebook login paths.
   */
  withBusinessScope?: boolean;
  /**
   * Optional. Facebook and Instagram only - request the Meta messaging (DM) scopes. Ignored unless
   * Instagram and Facebook direct messages are enabled for your organization (available on
   * request).
   */
  withMessagingScope?: boolean;
  /** Time in minutes, after which the link will expire. Minimum 5 minutes, maximum 48 hours. */
  expiresIn?: number;
  logoUrl?: string;
  userLogoUrl?: string;
  userName?: string;
  goBackButtonText?: string;
  hidePoweredBy?: boolean;
  hideGoBackButton?: boolean;
  hideUserLogo?: boolean;
  hideUserName?: boolean;
  hideLanguageSwitcher?: boolean;
  showModalOnConnectSuccess?: boolean;
  /** @default Language.En */
  language?: Language;
  maxSocialAccountsConnected?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SocialAccountCreatePortalLinkRequestProperties: s.Shape<ApiV1SocialAccountCreatePortalLinkRequest> =
  {
    teamId: s.string(),
    redirectUrl: s.optional(s.string()),
    socialAccountTypes: s.array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)),
    serverUrl: s.optional(s.string()),
    disableAutoLogin: s.defaulted(s.boolean(), false),
    tiktokForceLogin: s.defaulted(s.boolean(), false),
    forceBrowserOAuth: s.defaulted(s.boolean(), false),
    instagramConnectionMethod: s.optional(
      s.lazy(() => instagramConnectionMethodBundleSocialSocialAccountApiSchema),
    ),
    withBusinessScope: s.optional(s.boolean()),
    withMessagingScope: s.optional(s.boolean()),
    expiresIn: s.optional(s.int()),
    logoUrl: s.optional(s.string()),
    userLogoUrl: s.optional(s.string()),
    userName: s.optional(s.string()),
    goBackButtonText: s.optional(s.string()),
    hidePoweredBy: s.optional(s.boolean()),
    hideGoBackButton: s.optional(s.boolean()),
    hideUserLogo: s.optional(s.boolean()),
    hideUserName: s.optional(s.boolean()),
    hideLanguageSwitcher: s.optional(s.boolean()),
    showModalOnConnectSuccess: s.optional(s.boolean()),
    language: s.defaulted(languageSchema, Language.En),
    maxSocialAccountsConnected: s.optional(s.float64()),
  };

export const apiV1SocialAccountCreatePortalLinkRequestInternalSchema: Schema<ApiV1SocialAccountCreatePortalLinkRequest> =
  s.object<ApiV1SocialAccountCreatePortalLinkRequest>(apiV1SocialAccountCreatePortalLinkRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1SocialAccountCreatePortalLinkRequestSchema: Schema<ApiV1SocialAccountCreatePortalLinkRequest> =
  s.lazySchema(() =>
    s.object<ApiV1SocialAccountCreatePortalLinkRequest>(
      {
        ...apiV1SocialAccountCreatePortalLinkRequestProperties,
        redirectUrl: s.optional(s.string().check(s.url())),
        serverUrl: s.optional(s.string().check(s.url())),
        expiresIn: s.optional(s.int().check(s.gte(5), s.lte(2880))),
        logoUrl: s.optional(s.string().check(s.url())),
        userLogoUrl: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
  );
