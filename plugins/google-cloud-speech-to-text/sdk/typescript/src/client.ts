import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Operations } from "./resources/operations.js";
import { Projects } from "./resources/projects.js";
import { Speech } from "./resources/speech.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Cloud Speech-to-Text API (speech v1,
 * revision 20261110). 2 operation(s)., Generated from Google's published Discovery document for
 * Cloud Speech-to-Text API (speech v1, revision 20261110). 10 operation(s)., Generated from
 * Google's published Discovery document for Cloud Speech-to-Text API (speech v1, revision
 * 20261110). 2 operation(s).
 */
export class GoogleCloudSpeechToTextClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #operations?: Operations;
  #projects?: Projects;
  #speech?: Speech;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_SPEECH_TO_TEXT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleCloudSpeechToTextClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get speech(): Speech {
    return (this.#speech ??= new Speech(this.#rawClient, this.#servers, this.#auth));
  }
}
