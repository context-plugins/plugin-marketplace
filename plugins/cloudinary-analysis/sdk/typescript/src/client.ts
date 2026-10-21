import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analysis } from "./resources/analysis.js";
import { Tasks } from "./resources/tasks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Use the Analyze API to analyze any external asset and return details based on the type of
 * analysis requested.
 *
 * Currently supports the following analysis options:
 *   * [AI Vision -
 *     Tagging](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#tagging_mode)
 *   * [AI Vision -
 *     Moderation](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#moderation_mode)
 *   * [AI Vision -
 *     General](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#general_mode)
 *   *
 *     [Captioning](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
 *   * [Cld
 *     Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   * [Cld
 *     Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   *
 *     [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   * [Google Tagging](https://cloudinary.com/documentation/google_auto_tagging_addon)
 *   * [Human
 *     Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   * [Image Quality
 *     Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#image_quality_analysis)
 *   *
 *     [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   * [Shop
 *     Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   *
 *     [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
 *   * [Watermark
 *     Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection)
 *
 * **Notes**:
 *   * The Analyze API is currently in development and is available as a Public Beta, which means we
 *     value your feedback, so please feel free to [share any thoughts with
 *     us](https://support.cloudinary.com/hc/en-us/requests/new).
 *   * The analysis options require an active subscription to the relevant add-on. Learn more about
 *     [registering for
 *     add-ons](https://cloudinary.com/documentation/cloudinary_add_ons#registering_for_add_ons).
 *
 * The API supports both Basic Authentication using your Cloudinary API Key and API Secret (which
 * can be found on the Dashboard page of your [Cloudinary
 * Console](https://console.cloudinary.com/pm)) or OAuth2 ([Contact
 * support](https://support.cloudinary.com/hc/en-us/requests/new) for more information regarding
 * OAuth).
 */
export class AnalyzeApiBetaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analysis?: Analysis;
  #tasks?: Tasks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ANALYZE_API_BETA_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AnalyzeApiBetaClient/0.2.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.2.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Use the Analyze API to analyze any external asset and return details based on the type of
   * analysis requested.
   */
  get analysis(): Analysis {
    return (this.#analysis ??= new Analysis(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query the status of analysis tasks.
   */
  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }
}
