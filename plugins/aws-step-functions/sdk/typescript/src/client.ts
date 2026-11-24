import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-createstat.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-deletestat.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-describest.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-liststatem.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-publishsta.js";
import { AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat } from "./resources/aws-step-functions-xamz-target-awsstepfunctions-updatestat.js";
import { AwsStepFunctions } from "./resources/aws-step-functions.js";
import { Operations } from "./resources/operations.js";
import { StateMachines } from "./resources/state-machines.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS Step Functions. 26 operation(s)., Generated
 * from AWS's published Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's
 * published Smithy model for AWS Step Functions. 2 operation(s)., Generated from AWS's published
 * Smithy model for AWS Step Functions. 1 operation(s)., Generated from AWS's published Smithy model
 * for AWS Step Functions. 2 operation(s)., Generated from AWS's published Smithy model for AWS Step
 * Functions. 1 operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 1
 * operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 4
 * operation(s)., Generated from AWS's published Smithy model for AWS Step Functions. 6
 * operation(s).
 */
export class AwsStepFunctionsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #awsStepFunctions?: AwsStepFunctions;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat?: AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat?: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest?: AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem?: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta?: AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta;
  #awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat?: AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat;
  #operations?: Operations;
  #stateMachines?: StateMachines;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AWS_STEP_FUNCTIONS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AwsStepFunctionsClient/0.1.0 TypeScript", schema: s.string() },
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

  get awsStepFunctions(): AwsStepFunctions {
    return (this.#awsStepFunctions ??= new AwsStepFunctions(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat(): AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat(): AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(): AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsDescribest ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(): AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsListstatem ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta(): AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta(this.#rawClient, this.#servers, this.#auth));
  }

  get awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(): AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat {
    return (this.#awsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat ??=
      new AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get stateMachines(): StateMachines {
    return (this.#stateMachines ??= new StateMachines(this.#rawClient, this.#servers, this.#auth));
  }
}
