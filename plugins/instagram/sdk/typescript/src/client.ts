import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Comments } from "./resources/comments.js";
import { Hashtags } from "./resources/hashtags.js";
import { Insights } from "./resources/insights.js";
import { MediaApi } from "./resources/media-api.js";
import { Mentions } from "./resources/mentions.js";
import { Publishing } from "./resources/publishing.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Instagram Graph API allows Instagram Professionals (Business and Creator accounts) to manage
 * their presence on Instagram, including media publishing, comments, hashtags, mentions, insights,
 * and messaging. Uses the Facebook Graph API infrastructure with OAuth 2.0 authentication.
 */
export class InstagramClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #comments?: Comments;
  #hashtags?: Hashtags;
  #insights?: Insights;
  #mediaApi?: MediaApi;
  #mentions?: Mentions;
  #publishing?: Publishing;
  #users?: Users;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "INSTAGRAM_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "InstagramClient/21.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "21.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);
  }

  /**
   * Comment management and moderation
   */
  get comments(): Comments {
    return (this.#comments ??= new Comments(this.#rawClient, this.#servers));
  }

  /**
   * Hashtag search and media discovery
   */
  get hashtags(): Hashtags {
    return (this.#hashtags ??= new Hashtags(this.#rawClient, this.#servers));
  }

  /**
   * Account and media level analytics
   */
  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers));
  }

  /**
   * Photos, videos, stories, reels, and carousels
   */
  get mediaApi(): MediaApi {
    return (this.#mediaApi ??= new MediaApi(this.#rawClient, this.#servers));
  }

  /**
   * Content where account was mentioned
   */
  get mentions(): Mentions {
    return (this.#mentions ??= new Mentions(this.#rawClient, this.#servers));
  }

  /**
   * Content creation and publishing workflow
   */
  get publishing(): Publishing {
    return (this.#publishing ??= new Publishing(this.#rawClient, this.#servers));
  }

  /**
   * Instagram Business and Creator account profiles
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers));
  }
}
