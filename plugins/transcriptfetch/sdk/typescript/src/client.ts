import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { System } from "./resources/system.js";
import { Transcripts } from "./resources/transcripts.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged System across 2 of this provider's published API definitions:
 * transcriptfetch-api-v1-openapi.json, transcriptfetch-api-v2-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged Transcripts across 2 of this
 * provider's published API definitions: transcriptfetch-api-v1-openapi.json,
 * transcriptfetch-api-v2-openapi.json. Each path carries the servers of the definition it was
 * published in.
 */
export class TranscriptFetchClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #system?: System;
  #transcripts?: Transcripts;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "TRANSCRIPT_FETCH_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "TranscriptFetchClient/1.0.0 TypeScript", schema: s.string() },
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

  /**
   * Service health and metadata
   */
  get system(): System {
    return (this.#system ??= new System(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Transcript and video-list endpoints
   */
  get transcripts(): Transcripts {
    return (this.#transcripts ??= new Transcripts(this.#rawClient, this.#servers, this.#auth));
  }
}
