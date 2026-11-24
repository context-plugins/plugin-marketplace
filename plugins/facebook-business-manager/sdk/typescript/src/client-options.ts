import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 access token with ads_management or ads_read permissions. Obtain tokens via the
   * Facebook Login flow., Page access token with appropriate permissions such as
   * pages_manage_posts, pages_read_engagement, pages_manage_metadata., OAuth 2.0 access token with
   * ads_management or ads_read permissions. Obtain tokens via the Facebook Login flow., OAuth 2.0
   * access token with ads_management or ads_read permissions. Obtain tokens via the Facebook Login
   * flow., Page access token with appropriate permissions such as pages_manage_posts,
   * pages_read_engagement, pages_manage_metadata., Page access token with appropriate permissions
   * such as pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token
   * with appropriate permissions such as pages_manage_posts, pages_read_engagement,
   * pages_manage_metadata., Page access token with appropriate permissions such as
   * pages_manage_posts, pages_read_engagement, pages_manage_metadata., Page access token with
   * appropriate permissions such as pages_manage_posts, pages_read_engagement,
   * pages_manage_metadata.
   *
   * @remarks
   * Unset, it is read from `FACEBOOK_BUSINESS_MANAGER_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Facebook Graph API Production Server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
