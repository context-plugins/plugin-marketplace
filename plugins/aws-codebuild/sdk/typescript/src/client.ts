import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AwsCodebuildApi } from "./resources/aws-codebuild-api.js";
import { AwsCodebuildXAmzTargetCodebuild } from "./resources/aws-codebuild-xamz-target-codebuild.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Deletereport } from "./resources/aws-codebuild-xamz-target-codebuild20161006-deletereport.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Listbuilds } from "./resources/aws-codebuild-xamz-target-codebuild20161006-listbuilds.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Listprojects } from "./resources/aws-codebuild-xamz-target-codebuild20161006-listprojects.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Listreports } from "./resources/aws-codebuild-xamz-target-codebuild20161006-listreports.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Retrybuild } from "./resources/aws-codebuild-xamz-target-codebuild20161006-retrybuild.js";
import { AwsCodebuildXAmzTargetCodebuild20161006Startbuild } from "./resources/aws-codebuild-xamz-target-codebuild20161006-startbuild.js";
import { AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi } from "./resources/aws-codebuild-xamz-target-codebuild20161006-stopbuild-api.js";
import { Builds } from "./resources/builds.js";
import { CommandExecutionApi } from "./resources/command-execution-api.js";
import { FleetApi } from "./resources/fleet-api.js";
import { Projects } from "./resources/projects.js";
import { Sandboxe } from "./resources/sandboxe.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS CodeBuild. 3 operation(s)., Generated from
 * AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published
 * Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for
 * AWS CodeBuild. 1 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1
 * operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s).,
 * Generated from AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from
 * AWS's published Smithy model for AWS CodeBuild. 1 operation(s)., Generated from AWS's published
 * Smithy model for AWS CodeBuild. 38 operation(s)., Generated from AWS's published Smithy model for
 * AWS CodeBuild. 6 operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 3
 * operation(s)., Generated from AWS's published Smithy model for AWS CodeBuild. 5 operation(s).,
 * Generated from AWS's published Smithy model for AWS CodeBuild. 5 operation(s)., Generated from
 * AWS's published Smithy model for AWS CodeBuild. 3 operation(s).
 */
export class AwsCodeBuildClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #awsCodebuildApi?: AwsCodebuildApi;
  #awsCodebuildXAmzTargetCodebuild20161006Deletereport?: AwsCodebuildXAmzTargetCodebuild20161006Deletereport;
  #awsCodebuildXAmzTargetCodebuild20161006Listbuilds?: AwsCodebuildXAmzTargetCodebuild20161006Listbuilds;
  #awsCodebuildXAmzTargetCodebuild20161006Listprojects?: AwsCodebuildXAmzTargetCodebuild20161006Listprojects;
  #awsCodebuildXAmzTargetCodebuild20161006Listreports?: AwsCodebuildXAmzTargetCodebuild20161006Listreports;
  #awsCodebuildXAmzTargetCodebuild20161006Retrybuild?: AwsCodebuildXAmzTargetCodebuild20161006Retrybuild;
  #awsCodebuildXAmzTargetCodebuild20161006Startbuild?: AwsCodebuildXAmzTargetCodebuild20161006Startbuild;
  #awsCodebuildXAmzTargetCodebuild20161006StopbuildApi?: AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi;
  #awsCodebuildXAmzTargetCodebuild?: AwsCodebuildXAmzTargetCodebuild;
  #builds?: Builds;
  #commandExecutionApi?: CommandExecutionApi;
  #fleetApi?: FleetApi;
  #projects?: Projects;
  #sandboxe?: Sandboxe;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AWS_CODE_BUILD_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AwsCodeBuildClient/0.1.0 TypeScript", schema: s.string() },
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

  get awsCodebuildApi(): AwsCodebuildApi {
    return (this.#awsCodebuildApi ??= new AwsCodebuildApi(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Deletereport(): AwsCodebuildXAmzTargetCodebuild20161006Deletereport {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Deletereport ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Deletereport(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Listbuilds(): AwsCodebuildXAmzTargetCodebuild20161006Listbuilds {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Listbuilds ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Listbuilds(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Listprojects(): AwsCodebuildXAmzTargetCodebuild20161006Listprojects {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Listprojects ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Listprojects(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Listreports(): AwsCodebuildXAmzTargetCodebuild20161006Listreports {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Listreports ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Listreports(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Retrybuild(): AwsCodebuildXAmzTargetCodebuild20161006Retrybuild {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Retrybuild ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Retrybuild(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006Startbuild(): AwsCodebuildXAmzTargetCodebuild20161006Startbuild {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006Startbuild ??=
      new AwsCodebuildXAmzTargetCodebuild20161006Startbuild(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild20161006StopbuildApi(): AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi {
    return (this.#awsCodebuildXAmzTargetCodebuild20161006StopbuildApi ??=
      new AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi(this.#rawClient, this.#servers, this.#auth));
  }

  get awsCodebuildXAmzTargetCodebuild(): AwsCodebuildXAmzTargetCodebuild {
    return (this.#awsCodebuildXAmzTargetCodebuild ??= new AwsCodebuildXAmzTargetCodebuild(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get builds(): Builds {
    return (this.#builds ??= new Builds(this.#rawClient, this.#servers, this.#auth));
  }

  get commandExecutionApi(): CommandExecutionApi {
    return (this.#commandExecutionApi ??= new CommandExecutionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get fleetApi(): FleetApi {
    return (this.#fleetApi ??= new FleetApi(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get sandboxe(): Sandboxe {
    return (this.#sandboxe ??= new Sandboxe(this.#rawClient, this.#servers, this.#auth));
  }
}
