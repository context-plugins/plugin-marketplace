import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { CallAnalyticsCategory } from "./resources/call-analytics-category.js";
import { CallAnalyticsJobApi } from "./resources/call-analytics-job-api.js";
import { LanguageModelApi } from "./resources/language-model-api.js";
import { MedicalScribeJobApi } from "./resources/medical-scribe-job-api.js";
import { MedicalTranscriptionJobApi } from "./resources/medical-transcription-job-api.js";
import { MedicalVocabulary } from "./resources/medical-vocabulary.js";
import { Operations } from "./resources/operations.js";
import { TranscriptionJobs } from "./resources/transcription-jobs.js";
import { Vocabularies } from "./resources/vocabularies.js";
import { VocabularyFilter } from "./resources/vocabulary-filter.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 8 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Transcribe Service. 5 operation(s).
 */
export class AmazonTranscribeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #callAnalyticsCategory?: CallAnalyticsCategory;
  #callAnalyticsJobApi?: CallAnalyticsJobApi;
  #languageModelApi?: LanguageModelApi;
  #medicalScribeJobApi?: MedicalScribeJobApi;
  #medicalTranscriptionJobApi?: MedicalTranscriptionJobApi;
  #medicalVocabulary?: MedicalVocabulary;
  #operations?: Operations;
  #transcriptionJobs?: TranscriptionJobs;
  #vocabularies?: Vocabularies;
  #vocabularyFilter?: VocabularyFilter;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_TRANSCRIBE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonTranscribeClient/0.1.0 TypeScript", schema: s.string() },
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

  get callAnalyticsCategory(): CallAnalyticsCategory {
    return (this.#callAnalyticsCategory ??= new CallAnalyticsCategory(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get callAnalyticsJobApi(): CallAnalyticsJobApi {
    return (this.#callAnalyticsJobApi ??= new CallAnalyticsJobApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get languageModelApi(): LanguageModelApi {
    return (this.#languageModelApi ??= new LanguageModelApi(this.#rawClient, this.#servers, this.#auth));
  }

  get medicalScribeJobApi(): MedicalScribeJobApi {
    return (this.#medicalScribeJobApi ??= new MedicalScribeJobApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get medicalTranscriptionJobApi(): MedicalTranscriptionJobApi {
    return (this.#medicalTranscriptionJobApi ??= new MedicalTranscriptionJobApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get medicalVocabulary(): MedicalVocabulary {
    return (this.#medicalVocabulary ??= new MedicalVocabulary(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get transcriptionJobs(): TranscriptionJobs {
    return (this.#transcriptionJobs ??= new TranscriptionJobs(this.#rawClient, this.#servers, this.#auth));
  }

  get vocabularies(): Vocabularies {
    return (this.#vocabularies ??= new Vocabularies(this.#rawClient, this.#servers, this.#auth));
  }

  get vocabularyFilter(): VocabularyFilter {
    return (this.#vocabularyFilter ??= new VocabularyFilter(this.#rawClient, this.#servers, this.#auth));
  }
}
