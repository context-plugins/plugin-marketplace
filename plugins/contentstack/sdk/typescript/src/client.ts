import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { Analytics } from "./resources/analytics.js";
import { Assets } from "./resources/assets.js";
import { Attributes } from "./resources/attributes.js";
import { Audiences } from "./resources/audiences.js";
import { AuditLogs } from "./resources/audit-logs.js";
import { Automations } from "./resources/automations.js";
import { BrandKits } from "./resources/brand-kits.js";
import { ContentTypes } from "./resources/content-types.js";
import { Deployments } from "./resources/deployments.js";
import { Entries } from "./resources/entries.js";
import { EntryVariants } from "./resources/entry-variants.js";
import { Environments } from "./resources/environments.js";
import { Events } from "./resources/events.js";
import { ExecutionLogs } from "./resources/execution-logs.js";
import { Experiences } from "./resources/experiences.js";
import { FileUploads } from "./resources/file-uploads.js";
import { Geolocation } from "./resources/geolocation.js";
import { GlobalFields } from "./resources/global-fields.js";
import { LlmConfiguration } from "./resources/llm-configuration.js";
import { ManifestApi } from "./resources/manifest-api.js";
import { Organizations } from "./resources/organizations.js";
import { Projects } from "./resources/projects.js";
import { ScimGroups } from "./resources/scim-groups.js";
import { ScimSchemaDiscovery } from "./resources/scim-schema-discovery.js";
import { ScimUsers } from "./resources/scim-users.js";
import { Stacks } from "./resources/stacks.js";
import { Synchronization } from "./resources/synchronization.js";
import { UserAttributes } from "./resources/user-attributes.js";
import { UserSessions } from "./resources/user-sessions.js";
import { Users } from "./resources/users.js";
import { Variables } from "./resources/variables.js";
import { VoiceProfiles } from "./resources/voice-profiles.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Contentstack Launch API allows developers to programmatically manage web application
 * deployments within Contentstack Launch., The Contentstack Automate Management API allows
 * developers to programmatically manage automation projects and workflows within a Contentstack
 * organization., Operations tagged Assets across 2 of this provider's published API definitions:
 * contentstack-content-delivery-api-openapi.yml, contentstack-content-management-api-openapi.yml.
 * Each path carries the servers of the definition it was published in., The Contentstack
 * Personalize Management API provides programmatic control over the resources in a Contentstack
 * Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack
 * Personalize Management API provides programmatic control over the resources in a Contentstack
 * Personalize project, including Attributes, Audiences, Events, and Experiences., The Contentstack
 * Automate Management API allows developers to programmatically manage automation projects and
 * workflows within a Contentstack organization., The Contentstack Automate Management API allows
 * developers to programmatically manage automation projects and workflows within a Contentstack
 * organization., The Contentstack Brand Kit Management API provides programmatic control over Brand
 * Kit resources within a Contentstack organization., Operations tagged Content Types across 2 of
 * this provider's published API definitions: contentstack-content-delivery-api-openapi.yml,
 * contentstack-content-management-api-openapi.yml. Each path carries the servers of the definition
 * it was published in., The Contentstack Launch API allows developers to programmatically manage
 * web application deployments within Contentstack Launch., Operations tagged Entries across 2 of
 * this provider's published API definitions: contentstack-content-delivery-api-openapi.yml,
 * contentstack-content-management-api-openapi.yml. Each path carries the servers of the definition
 * it was published in., The Contentstack Content Delivery API (CDA) allows developers to retrieve
 * published content from their Contentstack stacks and deliver it to web or mobile applications.,
 * Operations tagged Environments across 2 of this provider's published API definitions:
 * contentstack-content-management-api-openapi.yml, contentstack-launch-api-openapi.yml. Each path
 * carries the servers of the definition it was published in., Operations tagged Events across 2 of
 * this provider's published API definitions: contentstack-personalize-edge-api-openapi.yml,
 * contentstack-personalize-management-api-openapi.yml. Each path carries the servers of the
 * definition it was published in., The Contentstack Automate Management API allows developers to
 * programmatically manage automation projects and workflows within a Contentstack organization.,
 * The Contentstack Personalize Management API provides programmatic control over the resources in a
 * Contentstack Personalize project, including Attributes, Audiences, Events, and Experiences., The
 * Contentstack Launch API allows developers to programmatically manage web application deployments
 * within Contentstack Launch., The Contentstack Personalize Management API provides programmatic
 * control over the resources in a Contentstack Personalize project, including Attributes,
 * Audiences, Events, and Experiences., The Contentstack Content Delivery API (CDA) allows
 * developers to retrieve published content from their Contentstack stacks and deliver it to web or
 * mobile applications., The Contentstack Brand Kit Management API provides programmatic control
 * over Brand Kit resources within a Contentstack organization., The Contentstack Personalize Edge
 * API enables real-time, dynamic personalization interactions using edge computing to deliver
 * targeted content experiences., The Contentstack Content Management API (CMA) provides
 * programmatic access to manage all aspects of a Contentstack stack, including content types,
 * entries, assets, environments, workflows, and users., Operations tagged Projects across 2 of this
 * provider's published API definitions: contentstack-automate-management-api-openapi.yml,
 * contentstack-launch-api-openapi.yml. Each path carries the servers of the definition it was
 * published in., The Contentstack SCIM API implements the System for Cross-domain Identity
 * Management (SCIM 2.0) standard to enable automated user lifecycle management within a
 * Contentstack organization., The Contentstack SCIM API implements the System for Cross-domain
 * Identity Management (SCIM 2.0) standard to enable automated user lifecycle management within a
 * Contentstack organization., The Contentstack SCIM API implements the System for Cross-domain
 * Identity Management (SCIM 2.0) standard to enable automated user lifecycle management within a
 * Contentstack organization., The Contentstack Content Management API (CMA) provides programmatic
 * access to manage all aspects of a Contentstack stack, including content types, entries, assets,
 * environments, workflows, and users., The Contentstack Content Delivery API (CDA) allows
 * developers to retrieve published content from their Contentstack stacks and deliver it to web or
 * mobile applications., The Contentstack Personalize Edge API enables real-time, dynamic
 * personalization interactions using edge computing to deliver targeted content experiences., The
 * Contentstack Content Management API (CMA) provides programmatic access to manage all aspects of a
 * Contentstack stack, including content types, entries, assets, environments, workflows, and
 * users., The Contentstack Content Management API (CMA) provides programmatic access to manage all
 * aspects of a Contentstack stack, including content types, entries, assets, environments,
 * workflows, and users., The Contentstack Automate Management API allows developers to
 * programmatically manage automation projects and workflows within a Contentstack organization.,
 * The Contentstack Brand Kit Management API provides programmatic control over Brand Kit resources
 * within a Contentstack organization.
 */
export class ContentstackClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analytics?: Analytics;
  #accounts?: Accounts;
  #assets?: Assets;
  #attributes?: Attributes;
  #audiences?: Audiences;
  #auditLogs?: AuditLogs;
  #automations?: Automations;
  #brandKits?: BrandKits;
  #contentTypes?: ContentTypes;
  #deployments?: Deployments;
  #entries?: Entries;
  #entryVariants?: EntryVariants;
  #environments?: Environments;
  #events?: Events;
  #executionLogs?: ExecutionLogs;
  #experiences?: Experiences;
  #fileUploads?: FileUploads;
  #geolocation?: Geolocation;
  #globalFields?: GlobalFields;
  #llmConfiguration?: LlmConfiguration;
  #manifestApi?: ManifestApi;
  #organizations?: Organizations;
  #projects?: Projects;
  #scimGroups?: ScimGroups;
  #scimSchemaDiscovery?: ScimSchemaDiscovery;
  #scimUsers?: ScimUsers;
  #stacks?: Stacks;
  #synchronization?: Synchronization;
  #userAttributes?: UserAttributes;
  #userSessions?: UserSessions;
  #users?: Users;
  #variables?: Variables;
  #voiceProfiles?: VoiceProfiles;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CONTENTSTACK_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ContentstackClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Analytics endpoints provide usage metrics for Launch projects such as cache revalidation quota
   * consumption.
   */
  get analytics(): Analytics {
    return (this.#analytics ??= new Analytics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Accounts represent authenticated connections to external services and third-party platforms
   * used by automations as action targets.
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Assets are media files such as images, videos, and documents stored in the Contentstack asset
   * library.
   */
  get assets(): Assets {
    return (this.#assets ??= new Assets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Attributes represent individual user data characteristics such as age, location, or browsing
   * history used to define audience segments.
   */
  get attributes(): Attributes {
    return (this.#attributes ??= new Attributes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Audiences are defined segments of users grouped by demographic, behavioral, or other
   * attribute-based criteria for targeted content experiences.
   */
  get audiences(): Audiences {
    return (this.#audiences ??= new Audiences(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Audit logs track all administrative actions taken within an automation project, providing a
   * history of configuration changes.
   */
  get auditLogs(): AuditLogs {
    return (this.#auditLogs ??= new AuditLogs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Automations are individual workflow definitions that connect triggers (such as Contentstack
   * content events) to actions (such as sending notifications or updating external systems).
   */
  get automations(): Automations {
    return (this.#automations ??= new Automations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Brand Kits are centralized repositories for an organization's brand identity assets,
   * guidelines, and AI configuration. They are used to ensure consistent brand voice and style
   * across AI-generated content.
   */
  get brandKits(): BrandKits {
    return (this.#brandKits ??= new BrandKits(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Content types define the structure of content entries in a Contentstack stack. They specify the
   * fields and their data types that entries must conform to.
   */
  get contentTypes(): ContentTypes {
    return (this.#contentTypes ??= new ContentTypes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Deployments represent individual build and publish operations to a Launch environment. Each
   * deployment has associated build logs, server logs, and status tracking.
   */
  get deployments(): Deployments {
    return (this.#deployments ??= new Deployments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Entries are instances of content types that hold the actual content data. They can be filtered,
   * sorted, paginated, and localized.
   */
  get entries(): Entries {
    return (this.#entries ??= new Entries(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Entry variants are customized versions of an entry created for personalization or A/B testing
   * purposes.
   */
  get entryVariants(): EntryVariants {
    return (this.#entryVariants ??= new EntryVariants(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing deployment environments (e.g., production, staging) within a stack.
   */
  get environments(): Environments {
    return (this.#environments ??= new Environments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The events endpoint allows applications to track user actions and behavioral events for
   * experience analytics and audience rule evaluation.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers));
  }

  /**
   * Execution logs record each time an automation runs, including the trigger context, steps
   * executed, and success or failure status.
   */
  get executionLogs(): ExecutionLogs {
    return (this.#executionLogs ??= new ExecutionLogs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Experiences define personalized content variations delivered to specific audience segments,
   * supporting both segmented and A/B test configurations.
   */
  get experiences(): Experiences {
    return (this.#experiences ??= new Experiences(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * File upload endpoints provide pre-signed URLs for securely uploading build artifacts to
   * Contentstack Launch infrastructure before triggering a deployment.
   */
  get fileUploads(): FileUploads {
    return (this.#fileUploads ??= new FileUploads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Geolocation endpoints provide geographic datasets including regions, countries, and cities for
   * location-based audience targeting.
   */
  get geolocation(): Geolocation {
    return (this.#geolocation ??= new Geolocation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Global fields are reusable field groups that can be referenced across multiple content types
   * within a Contentstack stack.
   */
  get globalFields(): GlobalFields {
    return (this.#globalFields ??= new GlobalFields(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * LLM Configuration endpoints allow organizations to register custom API credentials for large
   * language model providers, enabling content generation through their own LLM subscriptions.
   */
  get llmConfiguration(): LlmConfiguration {
    return (this.#llmConfiguration ??= new LlmConfiguration(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The manifest endpoint returns a list of all active experiences and their corresponding variants
   * that are activated for the current user based on their attributes and audience membership.
   */
  get manifestApi(): ManifestApi {
    return (this.#manifestApi ??= new ManifestApi(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints for managing Contentstack organizations, including user invitations, roles, stacks,
   * and audit logs at the organization level.
   */
  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Automation projects are containers for automations within a Contentstack organization. Each
   * project groups related automations and can have its own variables and account connections.
   */
  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * SCIM group endpoints allow Identity Providers to manage group memberships in Contentstack,
   * which map to role-based access control within the CMS.
   */
  get scimGroups(): ScimGroups {
    return (this.#scimGroups ??= new ScimGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Schema discovery endpoints implement the SCIM 2.0 service provider configuration, returning
   * supported schemas and resource types for IdP compatibility validation.
   */
  get scimSchemaDiscovery(): ScimSchemaDiscovery {
    return (this.#scimSchemaDiscovery ??= new ScimSchemaDiscovery(this.#rawClient, this.#servers));
  }

  /**
   * SCIM user endpoints enable Identity Providers to provision, update, and deprovision user
   * accounts within a Contentstack organization following the SCIM 2.0 User schema.
   */
  get scimUsers(): ScimUsers {
    return (this.#scimUsers ??= new ScimUsers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for creating and managing Contentstack stacks, including settings, users, sharing,
   * and ownership transfer.
   */
  get stacks(): Stacks {
    return (this.#stacks ??= new Stacks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The synchronization endpoints allow developers to sync published content incrementally,
   * enabling efficient local caching and offline-first patterns.
   */
  get synchronization(): Synchronization {
    return (this.#synchronization ??= new Synchronization(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for setting, updating, and merging user attribute data used to determine audience
   * membership and personalized content targeting.
   */
  get userAttributes(): UserAttributes {
    return (this.#userAttributes ??= new UserAttributes(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints for authenticating users and managing session tokens within Contentstack.
   */
  get userSessions(): UserSessions {
    return (this.#userSessions ??= new UserSessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing Contentstack user accounts including profile updates, password resets,
   * and account activation.
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Project variables are reusable key-value pairs that can be referenced across multiple
   * automations within a project.
   */
  get variables(): Variables {
    return (this.#variables ??= new Variables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Voice Profiles define the writing style, tone, and persona characteristics for AI content
   * generation within a Brand Kit. Multiple voice profiles can be created to support different
   * content contexts or audiences.
   */
  get voiceProfiles(): VoiceProfiles {
    return (this.#voiceProfiles ??= new VoiceProfiles(this.#rawClient, this.#servers, this.#auth));
  }
}
