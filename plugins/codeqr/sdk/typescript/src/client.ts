import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analytics } from "./resources/analytics.js";
import { Domains } from "./resources/domains.js";
import { Events } from "./resources/events.js";
import { Folders } from "./resources/folders.js";
import { Links } from "./resources/links.js";
import { Projects } from "./resources/projects.js";
import { QrCodes } from "./resources/qr-codes.js";
import { Tags } from "./resources/tags.js";
import { Track } from "./resources/track.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Analytics across 2 of this provider's published API definitions:
 * codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Domains across 2 of this provider's published
 * API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Events across 2 of this
 * provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml.
 * Each path carries the servers of the definition it was published in., Operations tagged Folders
 * across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml,
 * codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Links across 2 of this provider's published API definitions:
 * codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Projects across 2 of this provider's published
 * API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged QR Codes across 2 of this
 * provider's published API definitions: codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml.
 * Each path carries the servers of the definition it was published in., Operations tagged Tags
 * across 2 of this provider's published API definitions: codeqr-io-openapi.documented.yml,
 * codeqr-io-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Track across 2 of this provider's published API definitions:
 * codeqr-io-openapi.documented.yml, codeqr-io-openapi.yml. Each path carries the servers of the
 * definition it was published in.
 */
export class CodeQrClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analytics?: Analytics;
  #domains?: Domains;
  #events?: Events;
  #folders?: Folders;
  #links?: Links;
  #projects?: Projects;
  #qrCodes?: QrCodes;
  #tags?: Tags;
  #track?: Track;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CODE_QR_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CodeQrClient/0.0.1 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.0.1", schema: s.string() },
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

  get domains(): Domains {
    return (this.#domains ??= new Domains(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get folders(): Folders {
    return (this.#folders ??= new Folders(this.#rawClient, this.#servers, this.#auth));
  }

  get links(): Links {
    return (this.#links ??= new Links(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get qrCodes(): QrCodes {
    return (this.#qrCodes ??= new QrCodes(this.#rawClient, this.#servers, this.#auth));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  get track(): Track {
    return (this.#track ??= new Track(this.#rawClient, this.#servers, this.#auth));
  }
}
