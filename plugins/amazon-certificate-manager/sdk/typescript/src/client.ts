import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AcmeAccountApi } from "./resources/acme-account-api.js";
import { AcmeDomainValidationApi } from "./resources/acme-domain-validation-api.js";
import { AcmeEndpointApi } from "./resources/acme-endpoint-api.js";
import { AcmeExternalAccountBindingApi } from "./resources/acme-external-account-binding-api.js";
import { Certificates } from "./resources/certificates.js";
import { Operations } from "./resources/operations.js";
import { TagApi } from "./resources/tag-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 3 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 5 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 9 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 10 operation(s).,
 * Generated from AWS's published Smithy model for AWS Certificate Manager. 4 operation(s).
 */
export class AwsCertificateManagerClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #acmeAccountApi?: AcmeAccountApi;
  #acmeDomainValidationApi?: AcmeDomainValidationApi;
  #acmeEndpointApi?: AcmeEndpointApi;
  #acmeExternalAccountBindingApi?: AcmeExternalAccountBindingApi;
  #certificates?: Certificates;
  #operations?: Operations;
  #tagApi?: TagApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AWS_CERTIFICATE_MANAGER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AwsCertificateManagerClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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

  get acmeAccountApi(): AcmeAccountApi {
    return (this.#acmeAccountApi ??= new AcmeAccountApi(this.#rawClient, this.#servers, this.#auth));
  }

  get acmeDomainValidationApi(): AcmeDomainValidationApi {
    return (this.#acmeDomainValidationApi ??= new AcmeDomainValidationApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get acmeEndpointApi(): AcmeEndpointApi {
    return (this.#acmeEndpointApi ??= new AcmeEndpointApi(this.#rawClient, this.#servers, this.#auth));
  }

  get acmeExternalAccountBindingApi(): AcmeExternalAccountBindingApi {
    return (this.#acmeExternalAccountBindingApi ??= new AcmeExternalAccountBindingApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get certificates(): Certificates {
    return (this.#certificates ??= new Certificates(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get tagApi(): TagApi {
    return (this.#tagApi ??= new TagApi(this.#rawClient, this.#servers, this.#auth));
  }
}
