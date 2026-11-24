import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { CelebrityRecognitionApi } from "./resources/celebrity-recognition-api.js";
import { ContentModeration } from "./resources/content-moderation.js";
import { CustomLabels } from "./resources/custom-labels.js";
import { Dataset } from "./resources/dataset.js";
import { FaceApi } from "./resources/face-api.js";
import { FaceCollections } from "./resources/face-collections.js";
import { FaceLiveness } from "./resources/face-liveness.js";
import { FaceSearch } from "./resources/face-search.js";
import { FacialAnalysis } from "./resources/facial-analysis.js";
import { ImageAnalysis } from "./resources/image-analysis.js";
import { MediaAnalysisJob } from "./resources/media-analysis-job.js";
import { Operations } from "./resources/operations.js";
import { ProjectPolicyApi } from "./resources/project-policy-api.js";
import { ProjectVersion } from "./resources/project-version.js";
import { Project } from "./resources/project.js";
import { StoredVideoAnalysis } from "./resources/stored-video-analysis.js";
import { StreamProcessorApi } from "./resources/stream-processor-api.js";
import { TextDetectionApi } from "./resources/text-detection-api.js";
import { UserApi } from "./resources/user-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Rekognition. 3 operation(s)., Generated
 * from AWS's published Smithy model for Amazon Rekognition. 1 operation(s)., Generated from AWS's
 * published Smithy model for Amazon Rekognition. 3 operation(s)., Generated from AWS's published
 * Smithy model for Amazon Rekognition. 6 operation(s)., Generated from AWS's published Smithy model
 * for Amazon Rekognition. 3 operation(s)., Generated from AWS's published Smithy model for Amazon
 * Rekognition. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition.
 * 3 operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 2
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 1
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 26
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 5
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 2
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 7
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 3
 * operation(s)., Generated from AWS's published Smithy model for Amazon Rekognition. 5
 * operation(s).
 */
export class AmazonRekognitionClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #celebrityRecognitionApi?: CelebrityRecognitionApi;
  #contentModeration?: ContentModeration;
  #customLabels?: CustomLabels;
  #dataset?: Dataset;
  #faceApi?: FaceApi;
  #faceCollections?: FaceCollections;
  #faceLiveness?: FaceLiveness;
  #faceSearch?: FaceSearch;
  #facialAnalysis?: FacialAnalysis;
  #imageAnalysis?: ImageAnalysis;
  #mediaAnalysisJob?: MediaAnalysisJob;
  #operations?: Operations;
  #project?: Project;
  #projectPolicyApi?: ProjectPolicyApi;
  #projectVersion?: ProjectVersion;
  #storedVideoAnalysis?: StoredVideoAnalysis;
  #streamProcessorApi?: StreamProcessorApi;
  #textDetectionApi?: TextDetectionApi;
  #userApi?: UserApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_REKOGNITION_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonRekognitionClient/0.1.0 TypeScript", schema: s.string() },
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

  get celebrityRecognitionApi(): CelebrityRecognitionApi {
    return (this.#celebrityRecognitionApi ??= new CelebrityRecognitionApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get contentModeration(): ContentModeration {
    return (this.#contentModeration ??= new ContentModeration(this.#rawClient, this.#servers, this.#auth));
  }

  get customLabels(): CustomLabels {
    return (this.#customLabels ??= new CustomLabels(this.#rawClient, this.#servers, this.#auth));
  }

  get dataset(): Dataset {
    return (this.#dataset ??= new Dataset(this.#rawClient, this.#servers, this.#auth));
  }

  get faceApi(): FaceApi {
    return (this.#faceApi ??= new FaceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get faceCollections(): FaceCollections {
    return (this.#faceCollections ??= new FaceCollections(this.#rawClient, this.#servers, this.#auth));
  }

  get faceLiveness(): FaceLiveness {
    return (this.#faceLiveness ??= new FaceLiveness(this.#rawClient, this.#servers, this.#auth));
  }

  get faceSearch(): FaceSearch {
    return (this.#faceSearch ??= new FaceSearch(this.#rawClient, this.#servers, this.#auth));
  }

  get facialAnalysis(): FacialAnalysis {
    return (this.#facialAnalysis ??= new FacialAnalysis(this.#rawClient, this.#servers, this.#auth));
  }

  get imageAnalysis(): ImageAnalysis {
    return (this.#imageAnalysis ??= new ImageAnalysis(this.#rawClient, this.#servers, this.#auth));
  }

  get mediaAnalysisJob(): MediaAnalysisJob {
    return (this.#mediaAnalysisJob ??= new MediaAnalysisJob(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get project(): Project {
    return (this.#project ??= new Project(this.#rawClient, this.#servers, this.#auth));
  }

  get projectPolicyApi(): ProjectPolicyApi {
    return (this.#projectPolicyApi ??= new ProjectPolicyApi(this.#rawClient, this.#servers, this.#auth));
  }

  get projectVersion(): ProjectVersion {
    return (this.#projectVersion ??= new ProjectVersion(this.#rawClient, this.#servers, this.#auth));
  }

  get storedVideoAnalysis(): StoredVideoAnalysis {
    return (this.#storedVideoAnalysis ??= new StoredVideoAnalysis(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get streamProcessorApi(): StreamProcessorApi {
    return (this.#streamProcessorApi ??= new StreamProcessorApi(this.#rawClient, this.#servers, this.#auth));
  }

  get textDetectionApi(): TextDetectionApi {
    return (this.#textDetectionApi ??= new TextDetectionApi(this.#rawClient, this.#servers, this.#auth));
  }

  get userApi(): UserApi {
    return (this.#userApi ??= new UserApi(this.#rawClient, this.#servers, this.#auth));
  }
}
