import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ContainerAudio } from "./resources/container-audio.js";
import { ContainerChat } from "./resources/container-chat.js";
import { ContainerClassification } from "./resources/container-classification.js";
import { ContainerCompletions } from "./resources/container-completions.js";
import { ContainerImage } from "./resources/container-image.js";
import { ContainerMessages } from "./resources/container-messages.js";
import { ContainerResponses } from "./resources/container-responses.js";
import { ContainerToken } from "./resources/container-token.js";
import { Cost } from "./resources/cost.js";
import { Dataset } from "./resources/dataset.js";
import { DedicatedAudio } from "./resources/dedicated-audio.js";
import { DedicatedChatRender } from "./resources/dedicated-chat-render.js";
import { DedicatedChat } from "./resources/dedicated-chat.js";
import { DedicatedClassification } from "./resources/dedicated-classification.js";
import { DedicatedCompletions } from "./resources/dedicated-completions.js";
import { DedicatedEmbeddings } from "./resources/dedicated-embeddings.js";
import { DedicatedEndpoint } from "./resources/dedicated-endpoint.js";
import { DedicatedImage } from "./resources/dedicated-image.js";
import { DedicatedMessages } from "./resources/dedicated-messages.js";
import { DedicatedResponses } from "./resources/dedicated-responses.js";
import { DedicatedToken } from "./resources/dedicated-token.js";
import { File } from "./resources/file.js";
import { ServerlessAudio } from "./resources/serverless-audio.js";
import { ServerlessChatRender } from "./resources/serverless-chat-render.js";
import { ServerlessChat } from "./resources/serverless-chat.js";
import { ServerlessCompletions } from "./resources/serverless-completions.js";
import { ServerlessKnowledge } from "./resources/serverless-knowledge.js";
import { ServerlessMessages } from "./resources/serverless-messages.js";
import { ServerlessModel } from "./resources/serverless-model.js";
import { ServerlessResponses } from "./resources/serverless-responses.js";
import { ServerlessToken } from "./resources/serverless-token.js";
import { ServerlessToolAssistedChat } from "./resources/serverless-tool-assisted-chat.js";
import { UsageApi } from "./resources/usage-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This is an OpenAPI reference of Friendli Suite API.
 */
export class FriendliSuiteApiReferenceClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #serverlessChat?: ServerlessChat;
  #serverlessToolAssistedChat?: ServerlessToolAssistedChat;
  #serverlessResponses?: ServerlessResponses;
  #serverlessMessages?: ServerlessMessages;
  #serverlessChatRender?: ServerlessChatRender;
  #serverlessCompletions?: ServerlessCompletions;
  #serverlessToken?: ServerlessToken;
  #serverlessAudio?: ServerlessAudio;
  #serverlessModel?: ServerlessModel;
  #serverlessKnowledge?: ServerlessKnowledge;
  #dedicatedChat?: DedicatedChat;
  #dedicatedResponses?: DedicatedResponses;
  #dedicatedMessages?: DedicatedMessages;
  #dedicatedChatRender?: DedicatedChatRender;
  #dedicatedCompletions?: DedicatedCompletions;
  #dedicatedEmbeddings?: DedicatedEmbeddings;
  #dedicatedToken?: DedicatedToken;
  #dedicatedImage?: DedicatedImage;
  #dedicatedAudio?: DedicatedAudio;
  #dedicatedEndpoint?: DedicatedEndpoint;
  #containerChat?: ContainerChat;
  #containerResponses?: ContainerResponses;
  #containerMessages?: ContainerMessages;
  #containerCompletions?: ContainerCompletions;
  #containerToken?: ContainerToken;
  #containerImage?: ContainerImage;
  #containerAudio?: ContainerAudio;
  #cost?: Cost;
  #usageApi?: UsageApi;
  #dataset?: Dataset;
  #file?: File;
  #dedicatedClassification?: DedicatedClassification;
  #containerClassification?: ContainerClassification;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FRIENDLI_SUITE_API_REFERENCE_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FriendliSuiteApiReferenceClient/0.1.0 TypeScript", schema: s.string() },
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

  get serverlessChat(): ServerlessChat {
    return (this.#serverlessChat ??= new ServerlessChat(this.#rawClient, this.#servers, this.#auth));
  }

  get serverlessToolAssistedChat(): ServerlessToolAssistedChat {
    return (this.#serverlessToolAssistedChat ??= new ServerlessToolAssistedChat(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get serverlessResponses(): ServerlessResponses {
    return (this.#serverlessResponses ??= new ServerlessResponses(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get serverlessMessages(): ServerlessMessages {
    return (this.#serverlessMessages ??= new ServerlessMessages(this.#rawClient, this.#servers, this.#auth));
  }

  get serverlessChatRender(): ServerlessChatRender {
    return (this.#serverlessChatRender ??= new ServerlessChatRender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get serverlessCompletions(): ServerlessCompletions {
    return (this.#serverlessCompletions ??= new ServerlessCompletions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get serverlessToken(): ServerlessToken {
    return (this.#serverlessToken ??= new ServerlessToken(this.#rawClient, this.#servers, this.#auth));
  }

  get serverlessAudio(): ServerlessAudio {
    return (this.#serverlessAudio ??= new ServerlessAudio(this.#rawClient, this.#servers, this.#auth));
  }

  get serverlessModel(): ServerlessModel {
    return (this.#serverlessModel ??= new ServerlessModel(this.#rawClient, this.#servers));
  }

  get serverlessKnowledge(): ServerlessKnowledge {
    return (this.#serverlessKnowledge ??= new ServerlessKnowledge(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get dedicatedChat(): DedicatedChat {
    return (this.#dedicatedChat ??= new DedicatedChat(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedResponses(): DedicatedResponses {
    return (this.#dedicatedResponses ??= new DedicatedResponses(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedMessages(): DedicatedMessages {
    return (this.#dedicatedMessages ??= new DedicatedMessages(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedChatRender(): DedicatedChatRender {
    return (this.#dedicatedChatRender ??= new DedicatedChatRender(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get dedicatedCompletions(): DedicatedCompletions {
    return (this.#dedicatedCompletions ??= new DedicatedCompletions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get dedicatedEmbeddings(): DedicatedEmbeddings {
    return (this.#dedicatedEmbeddings ??= new DedicatedEmbeddings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get dedicatedToken(): DedicatedToken {
    return (this.#dedicatedToken ??= new DedicatedToken(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedImage(): DedicatedImage {
    return (this.#dedicatedImage ??= new DedicatedImage(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedAudio(): DedicatedAudio {
    return (this.#dedicatedAudio ??= new DedicatedAudio(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedEndpoint(): DedicatedEndpoint {
    return (this.#dedicatedEndpoint ??= new DedicatedEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  get containerChat(): ContainerChat {
    return (this.#containerChat ??= new ContainerChat(this.#rawClient, this.#servers));
  }

  get containerResponses(): ContainerResponses {
    return (this.#containerResponses ??= new ContainerResponses(this.#rawClient, this.#servers));
  }

  get containerMessages(): ContainerMessages {
    return (this.#containerMessages ??= new ContainerMessages(this.#rawClient, this.#servers));
  }

  get containerCompletions(): ContainerCompletions {
    return (this.#containerCompletions ??= new ContainerCompletions(this.#rawClient, this.#servers));
  }

  get containerToken(): ContainerToken {
    return (this.#containerToken ??= new ContainerToken(this.#rawClient, this.#servers));
  }

  get containerImage(): ContainerImage {
    return (this.#containerImage ??= new ContainerImage(this.#rawClient, this.#servers));
  }

  get containerAudio(): ContainerAudio {
    return (this.#containerAudio ??= new ContainerAudio(this.#rawClient, this.#servers));
  }

  get cost(): Cost {
    return (this.#cost ??= new Cost(this.#rawClient, this.#servers, this.#auth));
  }

  get usageApi(): UsageApi {
    return (this.#usageApi ??= new UsageApi(this.#rawClient, this.#servers, this.#auth));
  }

  get dataset(): Dataset {
    return (this.#dataset ??= new Dataset(this.#rawClient, this.#servers, this.#auth));
  }

  get file(): File {
    return (this.#file ??= new File(this.#rawClient, this.#servers, this.#auth));
  }

  get dedicatedClassification(): DedicatedClassification {
    return (this.#dedicatedClassification ??= new DedicatedClassification(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get containerClassification(): ContainerClassification {
    return (this.#containerClassification ??= new ContainerClassification(this.#rawClient, this.#servers));
  }
}
