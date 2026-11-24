import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AdAccounts } from "./resources/ad-accounts.js";
import { AdCreatives } from "./resources/ad-creatives.js";
import { AdImages } from "./resources/ad-images.js";
import { AdSets } from "./resources/ad-sets.js";
import { Ads } from "./resources/ads.js";
import { Campaigns } from "./resources/campaigns.js";
import { CommentsApi } from "./resources/comments-api.js";
import { CustomAudiences } from "./resources/custom-audiences.js";
import { Insights } from "./resources/insights.js";
import { PageInsights } from "./resources/page-insights.js";
import { Pages } from "./resources/pages.js";
import { Photos } from "./resources/photos.js";
import { Posts } from "./resources/posts.js";
import { Videos } from "./resources/videos.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Create and manage ad campaigns, analyze performance, and automate advertising workflows across
 * Meta platforms. The Marketing API provides programmatic access to Facebook's advertising system,
 * enabling businesses to create campaigns, ad sets, and ads, manage budgets and bidding strategies,
 * define targeting audiences, and retrieve performance metrics., Manage Facebook Pages, publish and
 * manage posts, moderate comments, and track engagement through the Graph API. The Pages API allows
 * businesses to programmatically manage their Facebook presence, publish content, respond to
 * comments and messages, and retrieve page-level analytics., Create and manage ad campaigns,
 * analyze performance, and automate advertising workflows across Meta platforms. The Marketing API
 * provides programmatic access to Facebook's advertising system, enabling businesses to create
 * campaigns, ad sets, and ads, manage budgets and bidding strategies, define targeting audiences,
 * and retrieve performance metrics., Create and manage ad campaigns, analyze performance, and
 * automate advertising workflows across Meta platforms. The Marketing API provides programmatic
 * access to Facebook's advertising system, enabling businesses to create campaigns, ad sets, and
 * ads, manage budgets and bidding strategies, define targeting audiences, and retrieve performance
 * metrics., Manage Facebook Pages, publish and manage posts, moderate comments, and track
 * engagement through the Graph API. The Pages API allows businesses to programmatically manage
 * their Facebook presence, publish content, respond to comments and messages, and retrieve
 * page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and
 * track engagement through the Graph API. The Pages API allows businesses to programmatically
 * manage their Facebook presence, publish content, respond to comments and messages, and retrieve
 * page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and
 * track engagement through the Graph API. The Pages API allows businesses to programmatically
 * manage their Facebook presence, publish content, respond to comments and messages, and retrieve
 * page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and
 * track engagement through the Graph API. The Pages API allows businesses to programmatically
 * manage their Facebook presence, publish content, respond to comments and messages, and retrieve
 * page-level analytics., Manage Facebook Pages, publish and manage posts, moderate comments, and
 * track engagement through the Graph API. The Pages API allows businesses to programmatically
 * manage their Facebook presence, publish content, respond to comments and messages, and retrieve
 * page-level analytics.
 */
export class FacebookBusinessManagerClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #adAccounts?: AdAccounts;
  #adCreatives?: AdCreatives;
  #adImages?: AdImages;
  #adSets?: AdSets;
  #ads?: Ads;
  #campaigns?: Campaigns;
  #commentsApi?: CommentsApi;
  #customAudiences?: CustomAudiences;
  #insights?: Insights;
  #pageInsights?: PageInsights;
  #pages?: Pages;
  #photos?: Photos;
  #posts?: Posts;
  #videos?: Videos;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FACEBOOK_BUSINESS_MANAGER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FacebookBusinessManagerClient/25.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "25.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Manage advertising accounts including settings, spend limits, and account-level configurations.
   */
  get adAccounts(): AdAccounts {
    return (this.#adAccounts ??= new AdAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage ad creative content including images, videos, copy, and call-to-action configurations.
   */
  get adCreatives(): AdCreatives {
    return (this.#adCreatives ??= new AdCreatives(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and manage images used in ad creatives.
   */
  get adImages(): AdImages {
    return (this.#adImages ??= new AdImages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage ad sets within campaigns, including targeting, budgets, scheduling, and optimization
   * goals.
   */
  get adSets(): AdSets {
    return (this.#adSets ??= new AdSets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage individual ads within ad sets, including creative associations and status.
   */
  get ads(): Ads {
    return (this.#ads ??= new Ads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage advertising campaigns including creation, updating, and status management.
   */
  get campaigns(): Campaigns {
    return (this.#campaigns ??= new Campaigns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage comments on Page posts including reading, replying, and moderating.
   */
  get commentsApi(): CommentsApi {
    return (this.#commentsApi ??= new CommentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and manage custom audiences for ad targeting based on customer data, website visitors,
   * or app users.
   */
  get customAudiences(): CustomAudiences {
    return (this.#customAudiences ??= new CustomAudiences(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve performance metrics and analytics data for campaigns, ad sets, and ads.
   */
  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve analytics and engagement metrics for a Facebook Page.
   */
  get pageInsights(): PageInsights {
    return (this.#pageInsights ??= new PageInsights(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve and manage Facebook Page settings, information, and metadata.
   */
  get pages(): Pages {
    return (this.#pages ??= new Pages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and manage photos on a Facebook Page.
   */
  get photos(): Photos {
    return (this.#photos ??= new Photos(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, read, update, and delete posts on a Facebook Page feed.
   */
  get posts(): Posts {
    return (this.#posts ??= new Posts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and manage videos on a Facebook Page.
   */
  get videos(): Videos {
    return (this.#videos ??= new Videos(this.#rawClient, this.#servers, this.#auth));
  }
}
