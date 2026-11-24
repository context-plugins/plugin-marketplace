import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { DatasetGroups } from "./resources/dataset-groups.js";
import { DatasetImportJob } from "./resources/dataset-import-job.js";
import { Datasets } from "./resources/datasets.js";
import { ExplainabilityExport } from "./resources/explainability-export.js";
import { Explainability } from "./resources/explainability.js";
import { ExportJobs } from "./resources/export-jobs.js";
import { ForecastExportJob } from "./resources/forecast-export-job.js";
import { Forecasts } from "./resources/forecasts.js";
import { Monitor } from "./resources/monitor.js";
import { Operations } from "./resources/operations.js";
import { PredictorBacktestExportJob } from "./resources/predictor-backtest-export-job.js";
import { Predictors } from "./resources/predictors.js";
import { Resource } from "./resources/resource.js";
import { Tags } from "./resources/tags.js";
import { WhatIfAnalysis } from "./resources/what-if-analysis.js";
import { WhatIfForecastExport } from "./resources/what-if-forecast-export.js";
import { WhatIfForecast } from "./resources/what-if-forecast.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 1 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 7 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 3 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 2 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 3 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).
 */
export class AmazonForecastClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #datasetGroups?: DatasetGroups;
  #datasetImportJob?: DatasetImportJob;
  #datasets?: Datasets;
  #explainability?: Explainability;
  #explainabilityExport?: ExplainabilityExport;
  #exportJobs?: ExportJobs;
  #forecastExportJob?: ForecastExportJob;
  #forecasts?: Forecasts;
  #monitor?: Monitor;
  #operations?: Operations;
  #predictorBacktestExportJob?: PredictorBacktestExportJob;
  #predictors?: Predictors;
  #resource?: Resource;
  #tags?: Tags;
  #whatIfAnalysis?: WhatIfAnalysis;
  #whatIfForecast?: WhatIfForecast;
  #whatIfForecastExport?: WhatIfForecastExport;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_FORECAST_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonForecastClient/0.1.0 TypeScript", schema: s.string() },
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

  get datasetGroups(): DatasetGroups {
    return (this.#datasetGroups ??= new DatasetGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get datasetImportJob(): DatasetImportJob {
    return (this.#datasetImportJob ??= new DatasetImportJob(this.#rawClient, this.#servers, this.#auth));
  }

  get datasets(): Datasets {
    return (this.#datasets ??= new Datasets(this.#rawClient, this.#servers, this.#auth));
  }

  get explainability(): Explainability {
    return (this.#explainability ??= new Explainability(this.#rawClient, this.#servers, this.#auth));
  }

  get explainabilityExport(): ExplainabilityExport {
    return (this.#explainabilityExport ??= new ExplainabilityExport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get exportJobs(): ExportJobs {
    return (this.#exportJobs ??= new ExportJobs(this.#rawClient, this.#servers, this.#auth));
  }

  get forecastExportJob(): ForecastExportJob {
    return (this.#forecastExportJob ??= new ForecastExportJob(this.#rawClient, this.#servers, this.#auth));
  }

  get forecasts(): Forecasts {
    return (this.#forecasts ??= new Forecasts(this.#rawClient, this.#servers, this.#auth));
  }

  get monitor(): Monitor {
    return (this.#monitor ??= new Monitor(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get predictorBacktestExportJob(): PredictorBacktestExportJob {
    return (this.#predictorBacktestExportJob ??= new PredictorBacktestExportJob(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get predictors(): Predictors {
    return (this.#predictors ??= new Predictors(this.#rawClient, this.#servers, this.#auth));
  }

  get resource(): Resource {
    return (this.#resource ??= new Resource(this.#rawClient, this.#servers, this.#auth));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  get whatIfAnalysis(): WhatIfAnalysis {
    return (this.#whatIfAnalysis ??= new WhatIfAnalysis(this.#rawClient, this.#servers, this.#auth));
  }

  get whatIfForecast(): WhatIfForecast {
    return (this.#whatIfForecast ??= new WhatIfForecast(this.#rawClient, this.#servers, this.#auth));
  }

  get whatIfForecastExport(): WhatIfForecastExport {
    return (this.#whatIfForecastExport ??= new WhatIfForecastExport(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
