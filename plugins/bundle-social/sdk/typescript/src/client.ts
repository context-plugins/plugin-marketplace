import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analytics } from "./resources/analytics.js";
import { App } from "./resources/app.js";
import { Automation } from "./resources/automation.js";
import { CommentApi } from "./resources/comment-api.js";
import { ConversationApi } from "./resources/conversation-api.js";
import { Credit } from "./resources/credit.js";
import { Misc } from "./resources/misc.js";
import { OrganizationApi } from "./resources/organization-api.js";
import { PostApi } from "./resources/post-api.js";
import { PostCsv } from "./resources/post-csv.js";
import { PostImport } from "./resources/post-import.js";
import { SocialAccountApi } from "./resources/social-account-api.js";
import { TeamApi } from "./resources/team-api.js";
import { UploadApi } from "./resources/upload-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged analytics across 2 of this provider's published API definitions:
 * bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged app across 2 of this provider's published API
 * definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged automation across 2 of this
 * provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged comment
 * across 2 of this provider's published API definitions: bundle-social-openapi.json,
 * bundle-social-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged conversation across 2 of this provider's published API definitions:
 * bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged credit across 2 of this provider's published
 * API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged misc across 2 of this
 * provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged
 * organization across 2 of this provider's published API definitions: bundle-social-openapi.json,
 * bundle-social-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged post across 2 of this provider's published API definitions:
 * bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged postCSV across 2 of this provider's published
 * API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged postImport across 2 of this
 * provider's published API definitions: bundle-social-openapi.json, bundle-social-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged
 * socialAccount across 2 of this provider's published API definitions: bundle-social-openapi.json,
 * bundle-social-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged team across 2 of this provider's published API definitions:
 * bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged upload across 2 of this provider's published
 * API definitions: bundle-social-openapi.json, bundle-social-openapi.json. Each path carries the
 * servers of the definition it was published in.
 */
export class BundleSocialClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analytics?: Analytics;
  #app?: App;
  #automation?: Automation;
  #commentApi?: CommentApi;
  #conversationApi?: ConversationApi;
  #credit?: Credit;
  #misc?: Misc;
  #organizationApi?: OrganizationApi;
  #postApi?: PostApi;
  #postCsv?: PostCsv;
  #postImport?: PostImport;
  #socialAccountApi?: SocialAccountApi;
  #teamApi?: TeamApi;
  #uploadApi?: UploadApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BUNDLE_SOCIAL_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BundleSocialClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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

  get analytics(): Analytics {
    return (this.#analytics ??= new Analytics(this.#rawClient, this.#servers, this.#auth));
  }

  get app(): App {
    return (this.#app ??= new App(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Build, publish and monitor automation flows that react to incoming messages and comments, plus
   * the per-account provider settings they rely on.
   */
  get automation(): Automation {
    return (this.#automation ??= new Automation(this.#rawClient, this.#servers, this.#auth));
  }

  get commentApi(): CommentApi {
    return (this.#commentApi ??= new CommentApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read and reply to Instagram and Facebook direct message conversations, react to messages, and
   * send private replies to comments.
   */
  get conversationApi(): ConversationApi {
    return (this.#conversationApi ??= new ConversationApi(this.#rawClient, this.#servers, this.#auth));
  }

  get credit(): Credit {
    return (this.#credit ??= new Credit(this.#rawClient, this.#servers, this.#auth));
  }

  get misc(): Misc {
    return (this.#misc ??= new Misc(this.#rawClient, this.#servers, this.#auth));
  }

  get organizationApi(): OrganizationApi {
    return (this.#organizationApi ??= new OrganizationApi(this.#rawClient, this.#servers, this.#auth));
  }

  get postApi(): PostApi {
    return (this.#postApi ??= new PostApi(this.#rawClient, this.#servers, this.#auth));
  }

  get postCsv(): PostCsv {
    return (this.#postCsv ??= new PostCsv(this.#rawClient, this.#servers, this.#auth));
  }

  get postImport(): PostImport {
    return (this.#postImport ??= new PostImport(this.#rawClient, this.#servers, this.#auth));
  }

  get socialAccountApi(): SocialAccountApi {
    return (this.#socialAccountApi ??= new SocialAccountApi(this.#rawClient, this.#servers, this.#auth));
  }

  get teamApi(): TeamApi {
    return (this.#teamApi ??= new TeamApi(this.#rawClient, this.#servers, this.#auth));
  }

  get uploadApi(): UploadApi {
    return (this.#uploadApi ??= new UploadApi(this.#rawClient, this.#servers, this.#auth));
  }
}
