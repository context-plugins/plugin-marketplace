import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { GoogleServiceAccounts } from "./resources/google-service-accounts.js";
import { Projects } from "./resources/projects.js";
import { TransferJobs } from "./resources/transfer-jobs.js";
import { TransferOperations } from "./resources/transfer-operations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Storage Transfer API (storagetransfer
 * v1, revision 20261106). 1 operation(s)., Generated from Google's published Discovery document for
 * Storage Transfer API (storagetransfer v1, revision 20261106). 5 operation(s)., Generated from
 * Google's published Discovery document for Storage Transfer API (storagetransfer v1, revision
 * 20261106). 6 operation(s)., Generated from Google's published Discovery document for Storage
 * Transfer API (storagetransfer v1, revision 20261106). 5 operation(s).
 */
export class GoogleCloudStorageTransferServiceClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #googleServiceAccounts?: GoogleServiceAccounts;
  #projects?: Projects;
  #transferJobs?: TransferJobs;
  #transferOperations?: TransferOperations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_CLOUD_STORAGE_TRANSFER_SERVICE_LOG"),
      defaultHeaders: [
        {
          name: "User-Agent",
          value: "GoogleCloudStorageTransferServiceClient/1.0.0 TypeScript",
          schema: s.string(),
        },
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

  get googleServiceAccounts(): GoogleServiceAccounts {
    return (this.#googleServiceAccounts ??= new GoogleServiceAccounts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get transferJobs(): TransferJobs {
    return (this.#transferJobs ??= new TransferJobs(this.#rawClient, this.#servers, this.#auth));
  }

  get transferOperations(): TransferOperations {
    return (this.#transferOperations ??= new TransferOperations(this.#rawClient, this.#servers, this.#auth));
  }
}
