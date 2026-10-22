import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AgentsTest } from "./resources/agents-test.js";
import { Agents } from "./resources/agents.js";
import { BridgePhrases } from "./resources/bridge-phrases.js";
import { ChannelsTargets } from "./resources/channels-targets.js";
import { ChannelsTwilioNumbers } from "./resources/channels-twilio-numbers.js";
import { ChannelsTwilio } from "./resources/channels-twilio.js";
import { Channels } from "./resources/channels.js";
import { ConversationConfig } from "./resources/conversation-config.js";
import { Conversations } from "./resources/conversations.js";
import { CustomMessages } from "./resources/custom-messages.js";
import { Dashboards } from "./resources/dashboards.js";
import { DataSources } from "./resources/data-sources.js";
import { Directory } from "./resources/directory.js";
import { Events } from "./resources/events.js";
import { Experiments } from "./resources/experiments.js";
import { Incidents } from "./resources/incidents.js";
import { InsightsApi } from "./resources/insights-api.js";
import { InsightsFolders } from "./resources/insights-folders.js";
import { InsightsTools } from "./resources/insights-tools.js";
import { InsightsWorkflows } from "./resources/insights-workflows.js";
import { LanguageGroups } from "./resources/language-groups.js";
import { OrganizationsSipIpRanges } from "./resources/organizations-sip-ip-ranges.js";
import { Organizations } from "./resources/organizations.js";
import { OutboundBatches } from "./resources/outbound-batches.js";
import { OutboundCampaigns } from "./resources/outbound-campaigns.js";
import { Permissions } from "./resources/permissions.js";
import { Prompts } from "./resources/prompts.js";
import { Pronunciations } from "./resources/pronunciations.js";
import { Roles } from "./resources/roles.js";
import { Services } from "./resources/services.js";
import { SessionDebug } from "./resources/session-debug.js";
import { SessionLabels } from "./resources/session-labels.js";
import { SessionsFullSummary } from "./resources/sessions-full-summary.js";
import { SessionsLatency } from "./resources/sessions-latency.js";
import { SessionsTimeline } from "./resources/sessions-timeline.js";
import { SessionsTranscript } from "./resources/sessions-transcript.js";
import { Sessions } from "./resources/sessions.js";
import { Takeouts } from "./resources/takeouts.js";
import { ToolsApi } from "./resources/tools-api.js";
import { Users } from "./resources/users.js";
import { V1 } from "./resources/v1.js";
import { VoiceGroups } from "./resources/voice-groups.js";
import { buildServers, type Servers } from "./servers.js";

/**
 *
 * # Syllable Platform SDK
 *
 * Syllable SDK gives you the power of awesome AI agentry. 🚀
 *
 * ## Overview
 *
 * The Syllable SDK provides a comprehensive set of tools and APIs to integrate powerful AI
 * capabilities into your communication applications. Whether you're building phone agents,
 * chatbots, virtual assistants, or any other AI-driven solutions, Syllable SDK has got you covered.
 *
 * ## Features
 *
 * - **Agent Configuration**: Create and manage agents that can interact with users across various
 *   channels.
 * - **Channel Management**: Configure channels like SMS, web chat, and more to connect agents with
 *   users.
 * - **Custom Messages**: Set up custom messages that agents can deliver as greetings or responses.
 * - **Conversations**: Track and manage conversations between users and agents, including session
 *   management.
 * - **Tools and Workflows**: Leverage tools and workflows to enhance agent capabilities, such as
 *   data processing and API calls.
 * - **Data Sources**: Integrate data sources to provide agents with additional context and
 *   information.
 * - **Insights and Analytics**: Analyze conversations and sessions to gain insights into user
 *   interactions.
 * - **Permissions and Security**: Manage permissions to control access to various features and
 *   functionalities.
 * - **Language Support**: Define language groups to enable multilingual support for agents.
 * - **Outbound Campaigns**: Create and manage outbound communication campaigns to reach users
 *   effectively.
 * - **Session Labels**: Label sessions with evaluations of quality and descriptions of issues
 *   encountered.
 * - **Incident Management**: Track and manage incidents related to agent interactions.
 *
 * ## Seed deprecation
 *
 * Seed is deprecated by Syllable. Leave it unset for new Prompt and Insight Tool configurations.
 * Configured values, including zero, remain stored and produce a nonblocking `llm-seed-deprecated`
 * warning in `validation_issues` on successful saves and configuration reads, including Prompt
 * history. Unset/null values do not produce this warning. Match the issue identifier and field
 * path, rather than the human-readable message. Existing support restrictions still apply;
 * `llm-seed-unsupported` reports known Anthropic sampling restrictions separately.
 *
 * OpenAI and Azure OpenAI Chat Completions offer best-effort seed support where the model supports
 * it; Responses does not support seed. Anthropic does not support seed as a sampling parameter.
 * Google support depends on the model and API. Saved configuration and current warnings do not
 * establish the endpoint or seed handling of a past request. Sending seed does not prove it was
 * honored, and no sampling setting guarantees identical responses.
 *
 * For more consistent outputs, pin a model snapshot where available and keep inputs, tools and
 * supported settings constant. Use temperature zero only where supported. Model and backend changes
 * can still affect output; reuse a saved response when identical text is required.
 */
export class SyllableSdkClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #agents?: Agents;
  #agentsTest?: AgentsTest;
  #channels?: Channels;
  #channelsTwilio?: ChannelsTwilio;
  #channelsTwilioNumbers?: ChannelsTwilioNumbers;
  #channelsTargets?: ChannelsTargets;
  #conversations?: Conversations;
  #customMessages?: CustomMessages;
  #dashboards?: Dashboards;
  #dataSources?: DataSources;
  #directory?: Directory;
  #events?: Events;
  #incidents?: Incidents;
  #insightsApi?: InsightsApi;
  #insightsFolders?: InsightsFolders;
  #insightsTools?: InsightsTools;
  #insightsWorkflows?: InsightsWorkflows;
  #languageGroups?: LanguageGroups;
  #organizations?: Organizations;
  #outboundCampaigns?: OutboundCampaigns;
  #outboundBatches?: OutboundBatches;
  #permissions?: Permissions;
  #prompts?: Prompts;
  #roles?: Roles;
  #services?: Services;
  #sessions?: Sessions;
  #sessionLabels?: SessionLabels;
  #toolsApi?: ToolsApi;
  #bridgePhrases?: BridgePhrases;
  #conversationConfig?: ConversationConfig;
  #experiments?: Experiments;
  #pronunciations?: Pronunciations;
  #sessionsTranscript?: SessionsTranscript;
  #sessionsFullSummary?: SessionsFullSummary;
  #sessionsLatency?: SessionsLatency;
  #sessionsTimeline?: SessionsTimeline;
  #sessionDebug?: SessionDebug;
  #organizationsSipIpRanges?: OrganizationsSipIpRanges;
  #voiceGroups?: VoiceGroups;
  #takeouts?: Takeouts;
  #users?: Users;
  #v1?: V1;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SYLLABLE_SDK_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SyllableSdkClient/0.0.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.0.3", schema: s.string() },
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
   * Operations related to agent configuration. When a user interacts with the Syllable system, they
   * do so by communicating with an agent. An agent is linked to a prompt, a custom message, and one
   * or more channel targets to define its behavior and capabilities. For more information, see
   * [Console docs](https://docs.syllable.ai/workspaces/Agents).
   */
  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for testing agents with live text. These endpoints allow sending messages to an
   * agent and receiving its responses.
   */
  get agentsTest(): AgentsTest {
    return (this.#agentsTest ??= new AgentsTest(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to channel configuration. A channel is an organization-level point of
   * communication, like a phone number or a web chat. A channel can be associated with an agent by
   * creating a channel target linking them.
   */
  get channels(): Channels {
    return (this.#channels ??= new Channels(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Twilio channel configuration.
   */
  get channelsTwilio(): ChannelsTwilio {
    return (this.#channelsTwilio ??= new ChannelsTwilio(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to setting up phone numbers in Twilio for use in channels.
   */
  get channelsTwilioNumbers(): ChannelsTwilioNumbers {
    return (this.#channelsTwilioNumbers ??= new ChannelsTwilioNumbers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to channel target configuration. A channel target links a channel to an
   * agent, allowing users to communicate with the agent through that channel. For more information,
   * see [Console docs](https://docs.syllable.ai/Resources/Channels).
   */
  get channelsTargets(): ChannelsTargets {
    return (this.#channelsTargets ??= new ChannelsTargets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to conversations. A conversation is a record of messages between a user and
   * an agent, and is composed of one or more sessions.
   */
  get conversations(): Conversations {
    return (this.#conversations ??= new Conversations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to custom message configuration. A custom message is a pre-configured
   * message delivered by an agent as a greeting at the beginning of a conversation. Multiple agents
   * can use the same custom mesasage. A custom message has one or more rules defined, which allow
   * for different messages to be dynamically selected and delivered at runtime based on the current
   * time and either date or day of the week. For more information, see [Console
   * docs](https://docs.syllable.ai/Resources/Messages).
   */
  get customMessages(): CustomMessages {
    return (this.#customMessages ??= new CustomMessages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to dashboards. Currently the API/SDK only supports fetching basic
   * information about dashboards.
   */
  get dashboards(): Dashboards {
    return (this.#dashboards ??= new Dashboards(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to data sources. A data source is a blob of text that can be made available
   * to an agent's general info tools to provide more context to the agent when generating its
   * responses. For more information, see [Console
   * docs](https://docs.syllable.ai/Resources/DataSources).
   */
  get dataSources(): DataSources {
    return (this.#dataSources ??= new DataSources(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to directory
   */
  get directory(): Directory {
    return (this.#directory ??= new Directory(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to events. An event represents a specific occurrence during a session.
   * Currently the API/SDK only supports fetching logged events.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to incidents.
   */
  get incidents(): Incidents {
    return (this.#incidents ??= new Incidents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to insights results. An insight is a tool that processes conversation data
   * to extract information and generate reports.
   */
  get insightsApi(): InsightsApi {
    return (this.#insightsApi ??= new InsightsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to insights upload folders. An insight folder is used to upload call
   * recordings for insight workflow analysis.
   */
  get insightsFolders(): InsightsFolders {
    return (this.#insightsFolders ??= new InsightsFolders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to insights tool configurationss. An insight is a tool that processes
   * conversation data to extract information and generate reports.
   */
  get insightsTools(): InsightsTools {
    return (this.#insightsTools ??= new InsightsTools(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to insights workflows. An workflow is series of tool invocations that
   * processes conversation data to extract information and generate reports.
   */
  get insightsWorkflows(): InsightsWorkflows {
    return (this.#insightsWorkflows ??= new InsightsWorkflows(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to language groups. A language group is a collection of language, voice, and
   * DTMF configuration that can be linked to an agent to define the languages and voices it
   * supports. For more information, see [Console
   * docs](https://docs.syllable.ai/Resources/LanguageGroups).
   */
  get languageGroups(): LanguageGroups {
    return (this.#languageGroups ??= new LanguageGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to organizations.
   */
  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to outbound message campaigns
   */
  get outboundCampaigns(): OutboundCampaigns {
    return (this.#outboundCampaigns ??= new OutboundCampaigns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to outbound campaign batches
   */
  get outboundBatches(): OutboundBatches {
    return (this.#outboundBatches ??= new OutboundBatches(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to permissions. A permission is a specific capability or access level
   * granted to a user within the Syllable system. Permissions are used to control access to various
   * features and functionalities.
   */
  get permissions(): Permissions {
    return (this.#permissions ??= new Permissions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to prompts. A prompt defines the behavior of an agent by delivering
   * instructions to the LLM about how the agent should behave. A prompt can be linked to one or
   * more agents. A prompt can also be linked to tools to allow an agent using the prompt to use
   * them. For more information, see [Console docs](https://docs.syllable.ai/Resources/Prompts).
   */
  get prompts(): Prompts {
    return (this.#prompts ??= new Prompts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to roles. A role is a collection of permissions that can be assigned to
   * users to control their access to various features within the Syllable system.
   */
  get roles(): Roles {
    return (this.#roles ??= new Roles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to service configuration. A service is a collection of tools. You can
   * specify an authentication method and values on a service, and any linked tools will use that
   * auth information to generate headers for HTTP calls.
   */
  get services(): Services {
    return (this.#services ??= new Services(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to sessions. A session is a building block of a conversation. For more
   * information, see [Console docs](https://docs.syllable.ai/workspaces/Sessions).
   */
  get sessions(): Sessions {
    return (this.#sessions ??= new Sessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to labeling sessions with evaluations of quality and descriptions of issues
   * the user encountered or other details. For more information, see [Console
   * docs](https://docs.syllable.ai/workspaces/Sessions).
   */
  get sessionLabels(): SessionLabels {
    return (this.#sessionLabels ??= new SessionLabels(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to tool configuration. A tool is a function that an agent can call to
   * perform actions like accessing databases, making API calls, or processing data. For an agent to
   * have access to a tool, the prompt associated with that agent should be linked to the tool and
   * include instructions to use it. For more information, see [Console
   * docs](https://docs.syllable.ai/Resources/Tools).
   */
  get toolsApi(): ToolsApi {
    return (this.#toolsApi ??= new ToolsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get bridgePhrases(): BridgePhrases {
    return (this.#bridgePhrases ??= new BridgePhrases(this.#rawClient, this.#servers, this.#auth));
  }

  get conversationConfig(): ConversationConfig {
    return (this.#conversationConfig ??= new ConversationConfig(this.#rawClient, this.#servers, this.#auth));
  }

  get experiments(): Experiments {
    return (this.#experiments ??= new Experiments(this.#rawClient, this.#servers, this.#auth));
  }

  get pronunciations(): Pronunciations {
    return (this.#pronunciations ??= new Pronunciations(this.#rawClient, this.#servers, this.#auth));
  }

  get sessionsTranscript(): SessionsTranscript {
    return (this.#sessionsTranscript ??= new SessionsTranscript(this.#rawClient, this.#servers, this.#auth));
  }

  get sessionsFullSummary(): SessionsFullSummary {
    return (this.#sessionsFullSummary ??= new SessionsFullSummary(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get sessionsLatency(): SessionsLatency {
    return (this.#sessionsLatency ??= new SessionsLatency(this.#rawClient, this.#servers, this.#auth));
  }

  get sessionsTimeline(): SessionsTimeline {
    return (this.#sessionsTimeline ??= new SessionsTimeline(this.#rawClient, this.#servers, this.#auth));
  }

  get sessionDebug(): SessionDebug {
    return (this.#sessionDebug ??= new SessionDebug(this.#rawClient, this.#servers, this.#auth));
  }

  get organizationsSipIpRanges(): OrganizationsSipIpRanges {
    return (this.#organizationsSipIpRanges ??= new OrganizationsSipIpRanges(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get voiceGroups(): VoiceGroups {
    return (this.#voiceGroups ??= new VoiceGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get takeouts(): Takeouts {
    return (this.#takeouts ??= new Takeouts(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get v1(): V1 {
    return (this.#v1 ??= new V1(this.#rawClient, this.#servers, this.#auth));
  }
}
