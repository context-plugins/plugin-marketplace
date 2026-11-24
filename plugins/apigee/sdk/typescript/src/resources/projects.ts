import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  googleCloudApigeeV1ProvisionOrganizationRequestSchema,
  type GoogleCloudApigeeV1ProvisionOrganizationRequest,
} from "../models/google-cloud-apigee-v1-provision-organization-request.js";
import {
  googleCloudApihubV1AddonSchema,
  type GoogleCloudApihubV1Addon,
} from "../models/google-cloud-apihub-v1-addon.js";
import {
  googleCloudApihubV1ApiHubInstanceSchema,
  type GoogleCloudApihubV1ApiHubInstance,
} from "../models/google-cloud-apihub-v1-api-hub-instance.js";
import {
  googleCloudApihubV1ApiOperationSchema,
  type GoogleCloudApihubV1ApiOperation,
} from "../models/google-cloud-apihub-v1-api-operation.js";
import {
  googleCloudApihubV1ApiSchema,
  type GoogleCloudApihubV1Api,
} from "../models/google-cloud-apihub-v1-api.js";
import {
  googleCloudApihubV1AttributeSchema,
  type GoogleCloudApihubV1Attribute,
} from "../models/google-cloud-apihub-v1-attribute.js";
import {
  googleCloudApihubV1CollectApiDataRequestSchema,
  type GoogleCloudApihubV1CollectApiDataRequest,
} from "../models/google-cloud-apihub-v1-collect-api-data-request.js";
import {
  googleCloudApihubV1ConfigureAndDeployServerRequestSchema,
  type GoogleCloudApihubV1ConfigureAndDeployServerRequest,
} from "../models/google-cloud-apihub-v1-configure-and-deploy-server-request.js";
import {
  googleCloudApihubV1CurationSchema,
  type GoogleCloudApihubV1Curation,
} from "../models/google-cloud-apihub-v1-curation.js";
import {
  googleCloudApihubV1DefinitionSchema,
  type GoogleCloudApihubV1Definition,
} from "../models/google-cloud-apihub-v1-definition.js";
import {
  googleCloudApihubV1DependencySchema,
  type GoogleCloudApihubV1Dependency,
} from "../models/google-cloud-apihub-v1-dependency.js";
import {
  googleCloudApihubV1DeploymentSchema,
  type GoogleCloudApihubV1Deployment,
} from "../models/google-cloud-apihub-v1-deployment.js";
import {
  googleCloudApihubV1DisablePluginInstanceActionRequestSchema,
  type GoogleCloudApihubV1DisablePluginInstanceActionRequest,
} from "../models/google-cloud-apihub-v1-disable-plugin-instance-action-request.js";
import {
  googleCloudApihubV1DiscoveredApiObservationSchema,
  type GoogleCloudApihubV1DiscoveredApiObservation,
} from "../models/google-cloud-apihub-v1-discovered-api-observation.js";
import {
  googleCloudApihubV1DiscoveredApiOperationSchema,
  type GoogleCloudApihubV1DiscoveredApiOperation,
} from "../models/google-cloud-apihub-v1-discovered-api-operation.js";
import {
  googleCloudApihubV1EnablePluginInstanceActionRequestSchema,
  type GoogleCloudApihubV1EnablePluginInstanceActionRequest,
} from "../models/google-cloud-apihub-v1-enable-plugin-instance-action-request.js";
import {
  googleCloudApihubV1ExecutePluginInstanceActionRequestSchema,
  type GoogleCloudApihubV1ExecutePluginInstanceActionRequest,
} from "../models/google-cloud-apihub-v1-execute-plugin-instance-action-request.js";
import {
  googleCloudApihubV1ExternalApiSchema,
  type GoogleCloudApihubV1ExternalApi,
} from "../models/google-cloud-apihub-v1-external-api.js";
import {
  googleCloudApihubV1FetchAdditionalSpecContentResponseSchema,
  type GoogleCloudApihubV1FetchAdditionalSpecContentResponse,
} from "../models/google-cloud-apihub-v1-fetch-additional-spec-content-response.js";
import {
  googleCloudApihubV1GenerateSpecRequestSchema,
  type GoogleCloudApihubV1GenerateSpecRequest,
} from "../models/google-cloud-apihub-v1-generate-spec-request.js";
import {
  googleCloudApihubV1GenerateSpecResponseSchema,
  type GoogleCloudApihubV1GenerateSpecResponse,
} from "../models/google-cloud-apihub-v1-generate-spec-response.js";
import {
  googleCloudApihubV1GeneratedSpecApiSchema,
  type GoogleCloudApihubV1GeneratedSpecApi,
} from "../models/google-cloud-apihub-v1-generated-spec-api.js";
import {
  googleCloudApihubV1HostProjectRegistrationSchema,
  type GoogleCloudApihubV1HostProjectRegistration,
} from "../models/google-cloud-apihub-v1-host-project-registration.js";
import {
  googleCloudApihubV1ListAddonsResponseSchema,
  type GoogleCloudApihubV1ListAddonsResponse,
} from "../models/google-cloud-apihub-v1-list-addons-response.js";
import {
  googleCloudApihubV1ListApiOperationsResponseSchema,
  type GoogleCloudApihubV1ListApiOperationsResponse,
} from "../models/google-cloud-apihub-v1-list-api-operations-response.js";
import {
  googleCloudApihubV1ListApisResponseSchema,
  type GoogleCloudApihubV1ListApisResponse,
} from "../models/google-cloud-apihub-v1-list-apis-response.js";
import {
  googleCloudApihubV1ListAttributesResponseSchema,
  type GoogleCloudApihubV1ListAttributesResponse,
} from "../models/google-cloud-apihub-v1-list-attributes-response.js";
import {
  googleCloudApihubV1ListCurationsResponseSchema,
  type GoogleCloudApihubV1ListCurationsResponse,
} from "../models/google-cloud-apihub-v1-list-curations-response.js";
import {
  googleCloudApihubV1ListDependenciesResponseSchema,
  type GoogleCloudApihubV1ListDependenciesResponse,
} from "../models/google-cloud-apihub-v1-list-dependencies-response.js";
import {
  googleCloudApihubV1ListDeploymentsResponseSchema,
  type GoogleCloudApihubV1ListDeploymentsResponse,
} from "../models/google-cloud-apihub-v1-list-deployments-response.js";
import {
  googleCloudApihubV1ListDiscoveredApiObservationsResponseSchema,
  type GoogleCloudApihubV1ListDiscoveredApiObservationsResponse,
} from "../models/google-cloud-apihub-v1-list-discovered-api-observations-response.js";
import {
  googleCloudApihubV1ListDiscoveredApiOperationsResponseSchema,
  type GoogleCloudApihubV1ListDiscoveredApiOperationsResponse,
} from "../models/google-cloud-apihub-v1-list-discovered-api-operations-response.js";
import {
  googleCloudApihubV1ListExternalApisResponseSchema,
  type GoogleCloudApihubV1ListExternalApisResponse,
} from "../models/google-cloud-apihub-v1-list-external-apis-response.js";
import {
  googleCloudApihubV1ListGeneratedSpecApisResponseSchema,
  type GoogleCloudApihubV1ListGeneratedSpecApisResponse,
} from "../models/google-cloud-apihub-v1-list-generated-spec-apis-response.js";
import {
  googleCloudApihubV1ListHostProjectRegistrationsResponseSchema,
  type GoogleCloudApihubV1ListHostProjectRegistrationsResponse,
} from "../models/google-cloud-apihub-v1-list-host-project-registrations-response.js";
import {
  googleCloudApihubV1ListPluginInstancesResponseSchema,
  type GoogleCloudApihubV1ListPluginInstancesResponse,
} from "../models/google-cloud-apihub-v1-list-plugin-instances-response.js";
import {
  googleCloudApihubV1ListPluginsResponseSchema,
  type GoogleCloudApihubV1ListPluginsResponse,
} from "../models/google-cloud-apihub-v1-list-plugins-response.js";
import {
  googleCloudApihubV1ListRuntimeProjectAttachmentsResponseSchema,
  type GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse,
} from "../models/google-cloud-apihub-v1-list-runtime-project-attachments-response.js";
import {
  googleCloudApihubV1ListSpecsResponseSchema,
  type GoogleCloudApihubV1ListSpecsResponse,
} from "../models/google-cloud-apihub-v1-list-specs-response.js";
import {
  googleCloudApihubV1ListVersionsResponseSchema,
  type GoogleCloudApihubV1ListVersionsResponse,
} from "../models/google-cloud-apihub-v1-list-versions-response.js";
import {
  googleCloudApihubV1LookupApiHubInstanceResponseSchema,
  type GoogleCloudApihubV1LookupApiHubInstanceResponse,
} from "../models/google-cloud-apihub-v1-lookup-api-hub-instance-response.js";
import {
  googleCloudApihubV1LookupRuntimeProjectAttachmentResponseSchema,
  type GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse,
} from "../models/google-cloud-apihub-v1-lookup-runtime-project-attachment-response.js";
import {
  googleCloudApihubV1ManageAddonConfigRequestSchema,
  type GoogleCloudApihubV1ManageAddonConfigRequest,
} from "../models/google-cloud-apihub-v1-manage-addon-config-request.js";
import {
  googleCloudApihubV1ManagePluginInstanceSourceDataRequestSchema,
  type GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest,
} from "../models/google-cloud-apihub-v1-manage-plugin-instance-source-data-request.js";
import {
  googleCloudApihubV1PluginInstanceSchema,
  type GoogleCloudApihubV1PluginInstance,
} from "../models/google-cloud-apihub-v1-plugin-instance.js";
import {
  googleCloudApihubV1PluginSchema,
  type GoogleCloudApihubV1Plugin,
} from "../models/google-cloud-apihub-v1-plugin.js";
import {
  googleCloudApihubV1RetrieveApiViewsResponseSchema,
  type GoogleCloudApihubV1RetrieveApiViewsResponse,
} from "../models/google-cloud-apihub-v1-retrieve-api-views-response.js";
import {
  googleCloudApihubV1RuntimeProjectAttachmentSchema,
  type GoogleCloudApihubV1RuntimeProjectAttachment,
} from "../models/google-cloud-apihub-v1-runtime-project-attachment.js";
import {
  googleCloudApihubV1SearchResourcesRequestSchema,
  type GoogleCloudApihubV1SearchResourcesRequest,
} from "../models/google-cloud-apihub-v1-search-resources-request.js";
import {
  googleCloudApihubV1SearchResourcesResponseSchema,
  type GoogleCloudApihubV1SearchResourcesResponse,
} from "../models/google-cloud-apihub-v1-search-resources-response.js";
import {
  googleCloudApihubV1SpecContentsSchema,
  type GoogleCloudApihubV1SpecContents,
} from "../models/google-cloud-apihub-v1-spec-contents.js";
import {
  googleCloudApihubV1SpecSchema,
  type GoogleCloudApihubV1Spec,
} from "../models/google-cloud-apihub-v1-spec.js";
import {
  googleCloudApihubV1StyleGuideContentsSchema,
  type GoogleCloudApihubV1StyleGuideContents,
} from "../models/google-cloud-apihub-v1-style-guide-contents.js";
import {
  googleCloudApihubV1StyleGuideSchema,
  type GoogleCloudApihubV1StyleGuide,
} from "../models/google-cloud-apihub-v1-style-guide.js";
import {
  googleCloudApihubV1VersionSchema,
  type GoogleCloudApihubV1Version,
} from "../models/google-cloud-apihub-v1-version.js";
import {
  googleCloudLocationListLocationsResponseSchema,
  type GoogleCloudLocationListLocationsResponse,
} from "../models/google-cloud-location-list-locations-response.js";
import {
  googleCloudLocationLocationSchema,
  type GoogleCloudLocationLocation,
} from "../models/google-cloud-location-location.js";
import {
  googleLongrunningListOperationsResponseSchema,
  type GoogleLongrunningListOperationsResponse,
} from "../models/google-longrunning-list-operations-response.js";
import {
  googleLongrunningOperationSchema,
  type GoogleLongrunningOperation,
} from "../models/google-longrunning-operation.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import { specContentType1Schema, type SpecContentType1 } from "../models/spec-content-type1.js";
import {
  viewApigeeProjectsApiSchema,
  type ViewApigeeProjectsApi,
} from "../models/view-apigee-projects-api.js";
import type { Servers } from "../servers.js";

export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Provision organization projects
   *
   * @remarks
   * Provisions a new Apigee organization with a functioning runtime. This is the standard way to
   * create trial organizations for a free Apigee trial.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApigeeProjectsProvisionOrganizationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apigeeProjectsProvisionOrganization(
    request: Projects.ApigeeProjectsProvisionOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApigeeProjectsProvisionOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}:provisionOrganization"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApigeeV1ProvisionOrganizationRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApigeeProjectsProvisionOrganizationError,
      },
      options,
    );
  }

  /**
   * Get addons
   *
   * @remarks
   * Get an addon.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAddonsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAddonsGet(
    request: Projects.ApihubProjectsLocationsAddonsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Addon, Projects.ApihubProjectsLocationsAddonsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "addonsId", value: request.addonsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1AddonSchema },
        errorFactory: Projects.ApihubProjectsLocationsAddonsGetError,
      },
      options,
    );
  }

  /**
   * List addons
   *
   * @remarks
   * List addons.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAddonsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAddonsList(
    request: Projects.ApihubProjectsLocationsAddonsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ListAddonsResponse, Projects.ApihubProjectsLocationsAddonsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/addons"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListAddonsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsAddonsListError,
      },
      options,
    );
  }

  /**
   * Manage config addons
   *
   * @remarks
   * Manage addon config. This RPC is used for managing the config of the addon. Calling this RPC
   * moves the addon into an updating state until the long-running operation succeeds.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAddonsManageConfigError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAddonsManageConfig(
    request: Projects.ApihubProjectsLocationsAddonsManageConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsAddonsManageConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/addons/{addonsId}:manageConfig",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "addonsId", value: request.addonsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1ManageAddonConfigRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsAddonsManageConfigError,
      },
      options,
    );
  }

  /**
   * Create apiHubInstances
   *
   * @remarks
   * Provisions instance resources for the API Hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApiHubInstancesCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApiHubInstancesCreate(
    request: Projects.ApihubProjectsLocationsApiHubInstancesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "apiHubInstanceId", value: request.apiHubInstanceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiHubInstanceSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApiHubInstancesCreateError,
      },
      options,
    );
  }

  /**
   * Delete apiHubInstances
   *
   * @remarks
   * Deletes the API hub instance. Deleting the API hub instance will also result in the removal of
   * all associated runtime project attachments and the host project registration.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApiHubInstancesDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApiHubInstancesDelete(
    request: Projects.ApihubProjectsLocationsApiHubInstancesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apiHubInstancesId", value: request.apiHubInstancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApiHubInstancesDeleteError,
      },
      options,
    );
  }

  /**
   * Get apiHubInstances
   *
   * @remarks
   * Gets details of a single API Hub instance.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApiHubInstancesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApiHubInstancesGet(
    request: Projects.ApihubProjectsLocationsApiHubInstancesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ApiHubInstance, Projects.ApihubProjectsLocationsApiHubInstancesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apiHubInstancesId", value: request.apiHubInstancesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiHubInstanceSchema },
        errorFactory: Projects.ApihubProjectsLocationsApiHubInstancesGetError,
      },
      options,
    );
  }

  /**
   * Lookup apiHubInstances
   *
   * @remarks
   * Looks up an Api Hub instance in a given Google Cloud project. There will always be only one Api
   * Hub instance for a Google Cloud project across all locations.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApiHubInstancesLookupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApiHubInstancesLookup(
    request: Projects.ApihubProjectsLocationsApiHubInstancesLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1LookupApiHubInstanceResponse,
    Projects.ApihubProjectsLocationsApiHubInstancesLookupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances:lookup",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1LookupApiHubInstanceResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApiHubInstancesLookupError,
      },
      options,
    );
  }

  /**
   * Patch apiHubInstances
   *
   * @remarks
   * Update an Api Hub instance. The following fields in the ApiHubInstance can be updated: *
   * disable_search * vertex_location * agent_registry_sync_config The update_mask should be used to
   * specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApiHubInstancesPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApiHubInstancesPatch(
    request: Projects.ApihubProjectsLocationsApiHubInstancesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsApiHubInstancesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apiHubInstances/{apiHubInstancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apiHubInstancesId", value: request.apiHubInstancesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiHubInstanceSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApiHubInstancesPatchError,
      },
      options,
    );
  }

  /**
   * Create apis
   *
   * @remarks
   * Create an API resource in the API hub. Once an API resource is created, versions can be added
   * to it.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisCreate(
    request: Projects.ApihubProjectsLocationsApisCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "apiId", value: request.apiId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisCreateError,
      },
      options,
    );
  }

  /**
   * Delete apis
   *
   * @remarks
   * Delete an API resource in the API hub. API can only be deleted if all underlying versions are
   * deleted.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisDelete(
    request: Projects.ApihubProjectsLocationsApisDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [{ name: "force", value: request.force, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsApisDeleteError,
      },
      options,
    );
  }

  /**
   * Get apis
   *
   * @remarks
   * Get API resource details including the API versions contained in it.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisGet(
    request: Projects.ApihubProjectsLocationsApisGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisGetError,
      },
      options,
    );
  }

  /**
   * List apis
   *
   * @remarks
   * List API resources in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisList(
    request: Projects.ApihubProjectsLocationsApisListRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ListApisResponse, Projects.ApihubProjectsLocationsApisListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListApisResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisListError,
      },
      options,
    );
  }

  /**
   * Patch apis
   *
   * @remarks
   * Update an API resource in the API hub. The following fields in the API can be updated: *
   * display_name * description * owner * documentation * target_user * team * business_unit *
   * maturity_level * api_style * attributes * fingerprint The update_mask should be used to specify
   * the fields being updated. Updating the owner field requires complete owner message and updates
   * both owner and email fields.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisPatch(
    request: Projects.ApihubProjectsLocationsApisPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Api, Projects.ApihubProjectsLocationsApisPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisPatchError,
      },
      options,
    );
  }

  /**
   * Create versions
   *
   * @remarks
   * Create an API version for an API resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsCreate(
    request: Projects.ApihubProjectsLocationsApisVersionsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [{ name: "versionId", value: request.versionId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1VersionSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1VersionSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsCreateError,
      },
      options,
    );
  }

  /**
   * Get definitions
   *
   * @remarks
   * Get details about a definition in an API version.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsDefinitionsGet(
    request: Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1Definition,
    Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/definitions/{definitionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "definitionsId", value: request.definitionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DefinitionSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsDefinitionsGetError,
      },
      options,
    );
  }

  /**
   * Delete versions
   *
   * @remarks
   * Delete an API version. Version can only be deleted if all underlying specs, operations,
   * definitions and linked deployments are deleted.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsDelete(
    request: Projects.ApihubProjectsLocationsApisVersionsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [{ name: "force", value: request.force, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsDeleteError,
      },
      options,
    );
  }

  /**
   * Get versions
   *
   * @remarks
   * Get details about the API version of an API resource. This will include information about the
   * specs and operations present in the API version as well as the deployments linked to it.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsGet(
    request: Projects.ApihubProjectsLocationsApisVersionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1VersionSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsGetError,
      },
      options,
    );
  }

  /**
   * List versions
   *
   * @remarks
   * List API versions of an API resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsList(
    request: Projects.ApihubProjectsLocationsApisVersionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListVersionsResponse,
    Projects.ApihubProjectsLocationsApisVersionsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListVersionsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsListError,
      },
      options,
    );
  }

  /**
   * Create operations
   *
   * @remarks
   * Create an apiOperation in an API version. An apiOperation can be created only if the version
   * has no apiOperations which were created by parsing a spec.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsOperationsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsOperationsCreate(
    request: Projects.ApihubProjectsLocationsApisVersionsOperationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ApiOperation,
    Projects.ApihubProjectsLocationsApisVersionsOperationsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [{ name: "apiOperationId", value: request.apiOperationId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiOperationSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsOperationsCreateError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Delete an operation in an API version and we can delete only the operations created via create
   * API. If the operation was created by parsing the spec, then it can be deleted by editing or
   * deleting the spec. Deleting an operation will also remove any links between the operation and
   * deployments.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsOperationsDelete(
    request: Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsOperationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get operations
   *
   * @remarks
   * Get details about a particular operation in API version.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsOperationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsOperationsGet(
    request: Projects.ApihubProjectsLocationsApisVersionsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ApiOperation,
    Projects.ApihubProjectsLocationsApisVersionsOperationsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * List operations in an API version.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsOperationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsOperationsList(
    request: Projects.ApihubProjectsLocationsApisVersionsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListApiOperationsResponse,
    Projects.ApihubProjectsLocationsApisVersionsOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListApiOperationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsOperationsListError,
      },
      options,
    );
  }

  /**
   * Patch operations
   *
   * @remarks
   * Update an operation in an API version. The following fields in the ApiOperation resource can be
   * updated: * details.description * details.documentation * details.http_operation.path *
   * details.http_operation.method * details.deprecated * attributes * details.mcp_tool.title *
   * details.mcp_tool.description * details.mcp_tool.input_schema * details.mcp_tool.output_schema *
   * details.input_schema * details.output_schema * details.mcp_tool.annotations.title *
   * details.mcp_tool.annotations.read_only_hint * details.mcp_tool.annotations.destructive_hint *
   * details.mcp_tool.annotations.idempotent_hint * details.mcp_tool.annotations.open_world_hint *
   * details.mcp_tool.annotations.additional_hints The update_mask should be used to specify the
   * fields being updated. An operation can be updated only if the operation was created via
   * CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited
   * by updating the spec.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsOperationsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsOperationsPatch(
    request: Projects.ApihubProjectsLocationsApisVersionsOperationsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ApiOperation,
    Projects.ApihubProjectsLocationsApisVersionsOperationsPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ApiOperationSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ApiOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsOperationsPatchError,
      },
      options,
    );
  }

  /**
   * Patch versions
   *
   * @remarks
   * Update API version. The following fields in the version can be updated currently: *
   * display_name * description * documentation * deployments * lifecycle * compliance *
   * accreditation * attributes The update_mask should be used to specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsPatch(
    request: Projects.ApihubProjectsLocationsApisVersionsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Version, Projects.ApihubProjectsLocationsApisVersionsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1VersionSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1VersionSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsPatchError,
      },
      options,
    );
  }

  /**
   * Create specs
   *
   * @remarks
   * Add a spec to an API version in the API hub. Multiple specs can be added to an API version.
   * Note, while adding a spec, at least one of `contents` or `source_uri` must be provided. If
   * `contents` is provided, then `spec_type` must also be provided. On adding a spec with contents
   * to the version, the operations present in it will be added to the version.Note that the file
   * contents in the spec should be of the same type as defined in the
   * `projects/{project}/locations/{location}/attributes/system-spec-type` attribute associated with
   * spec resource. Note that specs of various types can be uploaded, however parsing of details is
   * supported for OpenAPI spec currently. In order to access the information parsed from the spec,
   * use the GetSpec method. In order to access the raw contents for a particular spec, use the
   * GetSpecContents method. In order to access the operations parsed from the spec, use the
   * ListAPIOperations method.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsCreate(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [{ name: "specId", value: request.specId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1SpecSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1SpecSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsCreateError,
      },
      options,
    );
  }

  /**
   * Delete specs
   *
   * @remarks
   * Delete a spec. Deleting a spec will also delete the associated operations from the version and
   * remove any links between the spec and deployments.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsDelete(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsDeleteError,
      },
      options,
    );
  }

  /**
   * Fetch additional spec content specs
   *
   * @remarks
   * Fetch additional spec content.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContent(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1FetchAdditionalSpecContentResponse,
    Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:fetchAdditionalSpecContent",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [
          {
            name: "specContentType",
            value: request.specContentType,
            schema: s.optional(s.lazy(() => specContentType1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1FetchAdditionalSpecContentResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError,
      },
      options,
    );
  }

  /**
   * Get specs
   *
   * @remarks
   * Get details about the information parsed from a spec. Note that this method does not return the
   * raw spec contents. Use GetSpecContents method to retrieve the same.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsGet(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1SpecSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsGetError,
      },
      options,
    );
  }

  /**
   * Get contents specs
   *
   * @remarks
   * Get spec contents.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsGetContents(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1SpecContents,
    Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:contents",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1SpecContentsSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsGetContentsError,
      },
      options,
    );
  }

  /**
   * Lint specs
   *
   * @remarks
   * Lints the requested spec and updates the corresponding API Spec with the lint response. This
   * lint response will be available in all subsequent Get and List Spec calls to Core service.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsLintError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsLint(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsLintRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsApisVersionsSpecsLintError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}:lint",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsLintError,
      },
      options,
    );
  }

  /**
   * List specs
   *
   * @remarks
   * List specs corresponding to a particular API resource.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsList(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListSpecsResponse,
    Projects.ApihubProjectsLocationsApisVersionsSpecsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListSpecsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsListError,
      },
      options,
    );
  }

  /**
   * Patch specs
   *
   * @remarks
   * Update spec. The following fields in the spec can be updated: * display_name * source_uri *
   * lint_response * attributes * contents * spec_type In case of an OAS spec, updating spec
   * contents can lead to: 1. Creation, deletion and update of operations. 2. Creation, deletion and
   * update of definitions. 3. Update of other info parsed out from the new spec. In case of
   * contents or source_uri being present in update mask, spec_type must also be present. Also,
   * spec_type can not be present in update mask if contents or source_uri is not present. The
   * update_mask should be used to specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsApisVersionsSpecsPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsApisVersionsSpecsPatch(
    request: Projects.ApihubProjectsLocationsApisVersionsSpecsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Spec, Projects.ApihubProjectsLocationsApisVersionsSpecsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/versions/{versionsId}/specs/{specsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "apisId", value: request.apisId, schema: s.string() },
          { name: "versionsId", value: request.versionsId, schema: s.string() },
          { name: "specsId", value: request.specsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1SpecSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1SpecSchema },
        errorFactory: Projects.ApihubProjectsLocationsApisVersionsSpecsPatchError,
      },
      options,
    );
  }

  /**
   * Create attributes
   *
   * @remarks
   * Create a user defined attribute. Certain pre defined attributes are already created by the API
   * hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes
   * method. Allowed values for the same can be updated via UpdateAttribute method.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAttributesCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAttributesCreate(
    request: Projects.ApihubProjectsLocationsAttributesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "attributeId", value: request.attributeId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1AttributeSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1AttributeSchema },
        errorFactory: Projects.ApihubProjectsLocationsAttributesCreateError,
      },
      options,
    );
  }

  /**
   * Delete attributes
   *
   * @remarks
   * Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the
   * attribute being deleted with any API hub resource will also get deleted.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAttributesDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAttributesDelete(
    request: Projects.ApihubProjectsLocationsAttributesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsAttributesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "attributesId", value: request.attributesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsAttributesDeleteError,
      },
      options,
    );
  }

  /**
   * Get attributes
   *
   * @remarks
   * Get details about the attribute.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAttributesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAttributesGet(
    request: Projects.ApihubProjectsLocationsAttributesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "attributesId", value: request.attributesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1AttributeSchema },
        errorFactory: Projects.ApihubProjectsLocationsAttributesGetError,
      },
      options,
    );
  }

  /**
   * List attributes
   *
   * @remarks
   * List all attributes.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAttributesListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAttributesList(
    request: Projects.ApihubProjectsLocationsAttributesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListAttributesResponse,
    Projects.ApihubProjectsLocationsAttributesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/attributes"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListAttributesResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsAttributesListError,
      },
      options,
    );
  }

  /**
   * Patch attributes
   *
   * @remarks
   * Update the attribute. The following fields in the Attribute resource can be updated: *
   * display_name The display name can be updated for user defined attributes only. * description
   * The description can be updated for user defined attributes only. * allowed_values To update the
   * list of allowed values, clients need to use the fetched list of allowed values and add or
   * remove values to or from the same list. The mutable allowed values can be updated for both user
   * defined and System defined attributes. The immutable allowed values cannot be updated or
   * deleted. The updated list of allowed values cannot be empty. If an allowed value that is
   * already used by some resource's attribute is deleted, then the association between the resource
   * and the attribute value will also be deleted. * cardinality The cardinality can be updated for
   * user defined attributes only. Cardinality can only be increased during an update. The
   * update_mask should be used to specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsAttributesPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsAttributesPatch(
    request: Projects.ApihubProjectsLocationsAttributesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Attribute, Projects.ApihubProjectsLocationsAttributesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/attributes/{attributesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "attributesId", value: request.attributesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1AttributeSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1AttributeSchema },
        errorFactory: Projects.ApihubProjectsLocationsAttributesPatchError,
      },
      options,
    );
  }

  /**
   * Collect api data locations
   *
   * @remarks
   * Collect API data from a source and push it to Hub's collect layer.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCollectApiDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCollectApiData(
    request: Projects.ApihubProjectsLocationsCollectApiDataRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsCollectApiDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}:collectApiData",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1CollectApiDataRequestSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsCollectApiDataError,
      },
      options,
    );
  }

  /**
   * Create curations
   *
   * @remarks
   * Create a curation resource in the API hub. Once a curation resource is created, plugin
   * instances can start using it.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCurationsCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCurationsCreate(
    request: Projects.ApihubProjectsLocationsCurationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "curationId", value: request.curationId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1CurationSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1CurationSchema },
        errorFactory: Projects.ApihubProjectsLocationsCurationsCreateError,
      },
      options,
    );
  }

  /**
   * Delete curations
   *
   * @remarks
   * Delete a curation resource in the API hub. A curation can only be deleted if it's not being
   * used by any plugin instance.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCurationsDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCurationsDelete(
    request: Projects.ApihubProjectsLocationsCurationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsCurationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "curationsId", value: request.curationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsCurationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get curations
   *
   * @remarks
   * Get curation resource details.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCurationsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCurationsGet(
    request: Projects.ApihubProjectsLocationsCurationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "curationsId", value: request.curationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1CurationSchema },
        errorFactory: Projects.ApihubProjectsLocationsCurationsGetError,
      },
      options,
    );
  }

  /**
   * List curations
   *
   * @remarks
   * List curation resources in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCurationsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCurationsList(
    request: Projects.ApihubProjectsLocationsCurationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListCurationsResponse,
    Projects.ApihubProjectsLocationsCurationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/curations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListCurationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsCurationsListError,
      },
      options,
    );
  }

  /**
   * Patch curations
   *
   * @remarks
   * Update a curation resource in the API hub. The following fields in the curation can be updated:
   * * display_name * description The update_mask should be used to specify the fields being
   * updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsCurationsPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsCurationsPatch(
    request: Projects.ApihubProjectsLocationsCurationsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Curation, Projects.ApihubProjectsLocationsCurationsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/curations/{curationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "curationsId", value: request.curationsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1CurationSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1CurationSchema },
        errorFactory: Projects.ApihubProjectsLocationsCurationsPatchError,
      },
      options,
    );
  }

  /**
   * Create dependencies
   *
   * @remarks
   * Create a dependency between two entities in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDependenciesCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDependenciesCreate(
    request: Projects.ApihubProjectsLocationsDependenciesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "dependencyId", value: request.dependencyId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1DependencySchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DependencySchema },
        errorFactory: Projects.ApihubProjectsLocationsDependenciesCreateError,
      },
      options,
    );
  }

  /**
   * Delete dependencies
   *
   * @remarks
   * Delete the dependency resource.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDependenciesDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDependenciesDelete(
    request: Projects.ApihubProjectsLocationsDependenciesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsDependenciesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "dependenciesId", value: request.dependenciesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsDependenciesDeleteError,
      },
      options,
    );
  }

  /**
   * Get dependencies
   *
   * @remarks
   * Get details about a dependency resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDependenciesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDependenciesGet(
    request: Projects.ApihubProjectsLocationsDependenciesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "dependenciesId", value: request.dependenciesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DependencySchema },
        errorFactory: Projects.ApihubProjectsLocationsDependenciesGetError,
      },
      options,
    );
  }

  /**
   * List dependencies
   *
   * @remarks
   * List dependencies based on the provided filter and pagination parameters.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDependenciesListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDependenciesList(
    request: Projects.ApihubProjectsLocationsDependenciesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListDependenciesResponse,
    Projects.ApihubProjectsLocationsDependenciesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/dependencies"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListDependenciesResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsDependenciesListError,
      },
      options,
    );
  }

  /**
   * Patch dependencies
   *
   * @remarks
   * Update a dependency based on the update_mask provided in the request. The following fields in
   * the dependency can be updated: * description
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDependenciesPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDependenciesPatch(
    request: Projects.ApihubProjectsLocationsDependenciesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Dependency, Projects.ApihubProjectsLocationsDependenciesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/dependencies/{dependenciesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "dependenciesId", value: request.dependenciesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1DependencySchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DependencySchema },
        errorFactory: Projects.ApihubProjectsLocationsDependenciesPatchError,
      },
      options,
    );
  }

  /**
   * Create deployments
   *
   * @remarks
   * Create a deployment resource in the API hub. Once a deployment resource is created, it can be
   * associated with API versions.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDeploymentsCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDeploymentsCreate(
    request: Projects.ApihubProjectsLocationsDeploymentsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "deploymentId", value: request.deploymentId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1DeploymentSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DeploymentSchema },
        errorFactory: Projects.ApihubProjectsLocationsDeploymentsCreateError,
      },
      options,
    );
  }

  /**
   * Delete deployments
   *
   * @remarks
   * Deletes a deployment resource in the API hub. A deployment can only be deleted after its links
   * to any versions, specs, and API operations have been removed.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDeploymentsDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDeploymentsDelete(
    request: Projects.ApihubProjectsLocationsDeploymentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsDeploymentsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "deploymentsId", value: request.deploymentsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsDeploymentsDeleteError,
      },
      options,
    );
  }

  /**
   * Get deployments
   *
   * @remarks
   * Get details about a deployment and the API versions linked to it.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDeploymentsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDeploymentsGet(
    request: Projects.ApihubProjectsLocationsDeploymentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "deploymentsId", value: request.deploymentsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DeploymentSchema },
        errorFactory: Projects.ApihubProjectsLocationsDeploymentsGetError,
      },
      options,
    );
  }

  /**
   * List deployments
   *
   * @remarks
   * List deployment resources in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDeploymentsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDeploymentsList(
    request: Projects.ApihubProjectsLocationsDeploymentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListDeploymentsResponse,
    Projects.ApihubProjectsLocationsDeploymentsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/deployments"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListDeploymentsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsDeploymentsListError,
      },
      options,
    );
  }

  /**
   * Patch deployments
   *
   * @remarks
   * Update a deployment resource in the API hub. The following fields in the deployment resource
   * can be updated: * display_name * description * documentation * deployment_type * resource_uri *
   * endpoints * slo * environment * attributes * source_project * source_environment *
   * management_url * source_uri The update_mask should be used to specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDeploymentsPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDeploymentsPatch(
    request: Projects.ApihubProjectsLocationsDeploymentsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Deployment, Projects.ApihubProjectsLocationsDeploymentsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/deployments/{deploymentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "deploymentsId", value: request.deploymentsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1DeploymentSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DeploymentSchema },
        errorFactory: Projects.ApihubProjectsLocationsDeploymentsPatchError,
      },
      options,
    );
  }

  /**
   * Get discoveredApiOperations
   *
   * @remarks
   * Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGet(
    request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1DiscoveredApiOperation,
    Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations/{discoveredApiOperationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "discoveredApiObservationsId",
            value: request.discoveredApiObservationsId,
            schema: s.string(),
          },
          { name: "discoveredApiOperationsId", value: request.discoveredApiOperationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DiscoveredApiOperationSchema },
        errorFactory:
          Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError,
      },
      options,
    );
  }

  /**
   * List discoveredApiOperations
   *
   * @remarks
   * Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.
   *
   * @returns Successful response
   *
   * @throws {@link
   * Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsList(
    request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListDiscoveredApiOperationsResponse,
    Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}/discoveredApiOperations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "discoveredApiObservationsId",
            value: request.discoveredApiObservationsId,
            schema: s.string(),
          },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListDiscoveredApiOperationsResponseSchema },
        errorFactory:
          Projects.ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError,
      },
      options,
    );
  }

  /**
   * Get discoveredApiObservations
   *
   * @remarks
   * Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDiscoveredApiObservationsGet(
    request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1DiscoveredApiObservation,
    Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations/{discoveredApiObservationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "discoveredApiObservationsId",
            value: request.discoveredApiObservationsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1DiscoveredApiObservationSchema },
        errorFactory: Projects.ApihubProjectsLocationsDiscoveredApiObservationsGetError,
      },
      options,
    );
  }

  /**
   * List discoveredApiObservations
   *
   * @remarks
   * Lists all the DiscoveredAPIObservations in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsDiscoveredApiObservationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsDiscoveredApiObservationsList(
    request: Projects.ApihubProjectsLocationsDiscoveredApiObservationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListDiscoveredApiObservationsResponse,
    Projects.ApihubProjectsLocationsDiscoveredApiObservationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/discoveredApiObservations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListDiscoveredApiObservationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsDiscoveredApiObservationsListError,
      },
      options,
    );
  }

  /**
   * Create externalApis
   *
   * @remarks
   * Create an External API resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsExternalApisCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsExternalApisCreate(
    request: Projects.ApihubProjectsLocationsExternalApisCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "externalApiId", value: request.externalApiId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ExternalApiSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ExternalApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsExternalApisCreateError,
      },
      options,
    );
  }

  /**
   * Delete externalApis
   *
   * @remarks
   * Delete an External API resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsExternalApisDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsExternalApisDelete(
    request: Projects.ApihubProjectsLocationsExternalApisDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsExternalApisDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "externalApisId", value: request.externalApisId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsExternalApisDeleteError,
      },
      options,
    );
  }

  /**
   * Get externalApis
   *
   * @remarks
   * Get details about an External API resource in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsExternalApisGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsExternalApisGet(
    request: Projects.ApihubProjectsLocationsExternalApisGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "externalApisId", value: request.externalApisId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ExternalApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsExternalApisGetError,
      },
      options,
    );
  }

  /**
   * List externalApis
   *
   * @remarks
   * List External API resources in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsExternalApisListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsExternalApisList(
    request: Projects.ApihubProjectsLocationsExternalApisListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListExternalApisResponse,
    Projects.ApihubProjectsLocationsExternalApisListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/externalApis"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListExternalApisResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsExternalApisListError,
      },
      options,
    );
  }

  /**
   * Patch externalApis
   *
   * @remarks
   * Update an External API resource in the API hub. The following fields can be updated: *
   * display_name * description * documentation * endpoints * paths The update_mask should be used
   * to specify the fields being updated.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsExternalApisPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsExternalApisPatch(
    request: Projects.ApihubProjectsLocationsExternalApisPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ExternalApi, Projects.ApihubProjectsLocationsExternalApisPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/externalApis/{externalApisId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "externalApisId", value: request.externalApisId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1ExternalApiSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ExternalApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsExternalApisPatchError,
      },
      options,
    );
  }

  /**
   * Generate spec generatedSpecApis
   *
   * @remarks
   * Merges the per-day stored specs across the requested window and returns the merged OpenAPI
   * document. Preview: this method is in Public Preview. Behavior and the API surface may change
   * until the Spec Generation feature reaches General Availability.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsGeneratedSpecApisGenerateSpec(
    request: Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1GenerateSpecResponse,
    Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}:generateSpec",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "generatedSpecApisId", value: request.generatedSpecApisId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1GenerateSpecRequestSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1GenerateSpecResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError,
      },
      options,
    );
  }

  /**
   * Get generatedSpecApis
   *
   * @remarks
   * Gets a single GeneratedSpecApi by resource name. Preview: this method is in Public Preview.
   * Behavior and the API surface may change until the Spec Generation feature reaches General
   * Availability.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsGeneratedSpecApisGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsGeneratedSpecApisGet(
    request: Projects.ApihubProjectsLocationsGeneratedSpecApisGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1GeneratedSpecApi,
    Projects.ApihubProjectsLocationsGeneratedSpecApisGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis/{generatedSpecApisId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "generatedSpecApisId", value: request.generatedSpecApisId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1GeneratedSpecApiSchema },
        errorFactory: Projects.ApihubProjectsLocationsGeneratedSpecApisGetError,
      },
      options,
    );
  }

  /**
   * List generatedSpecApis
   *
   * @remarks
   * Lists the APIs the pipeline is tracking, ordered by `update_time desc`. Preview: this method is
   * in Public Preview. Behavior and the API surface may change until the Spec Generation feature
   * reaches General Availability.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsGeneratedSpecApisListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsGeneratedSpecApisList(
    request: Projects.ApihubProjectsLocationsGeneratedSpecApisListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListGeneratedSpecApisResponse,
    Projects.ApihubProjectsLocationsGeneratedSpecApisListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/generatedSpecApis",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListGeneratedSpecApisResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsGeneratedSpecApisListError,
      },
      options,
    );
  }

  /**
   * Get locations
   *
   * @remarks
   * Gets information about a location.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsGet(
    request: Projects.ApihubProjectsLocationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudLocationLocation, Projects.ApihubProjectsLocationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudLocationLocationSchema },
        errorFactory: Projects.ApihubProjectsLocationsGetError,
      },
      options,
    );
  }

  /**
   * Create hostProjectRegistrations
   *
   * @remarks
   * Create a host project registration. A Google cloud project can be registered as a host project
   * if it is not attached as a runtime project to another host project. A project can have only one
   * host project registration at a time. Subsequent register calls for the same project will fail
   * until the existing registration is deleted.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsHostProjectRegistrationsCreate(
    request: Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1HostProjectRegistration,
    Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          {
            name: "hostProjectRegistrationId",
            value: request.hostProjectRegistrationId,
            schema: s.optional(s.string()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1HostProjectRegistrationSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1HostProjectRegistrationSchema },
        errorFactory: Projects.ApihubProjectsLocationsHostProjectRegistrationsCreateError,
      },
      options,
    );
  }

  /**
   * Get hostProjectRegistrations
   *
   * @remarks
   * Get a host project registration.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsHostProjectRegistrationsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsHostProjectRegistrationsGet(
    request: Projects.ApihubProjectsLocationsHostProjectRegistrationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1HostProjectRegistration,
    Projects.ApihubProjectsLocationsHostProjectRegistrationsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations/{hostProjectRegistrationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "hostProjectRegistrationsId",
            value: request.hostProjectRegistrationsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1HostProjectRegistrationSchema },
        errorFactory: Projects.ApihubProjectsLocationsHostProjectRegistrationsGetError,
      },
      options,
    );
  }

  /**
   * List hostProjectRegistrations
   *
   * @remarks
   * Lists host project registrations.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsHostProjectRegistrationsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsHostProjectRegistrationsList(
    request: Projects.ApihubProjectsLocationsHostProjectRegistrationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListHostProjectRegistrationsResponse,
    Projects.ApihubProjectsLocationsHostProjectRegistrationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/hostProjectRegistrations",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListHostProjectRegistrationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsHostProjectRegistrationsListError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Lists information about the supported locations for this service. This method lists locations
   * based on the resource scope provided in the ListLocationsRequest.name field: * **Global
   * locations**: If `name` is empty, the method lists the public locations available to all
   * projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`,
   * the method lists locations visible to that specific project. This includes public, private, or
   * other project-specific locations enabled for the project. For gRPC and client library
   * implementations, the resource name is passed as the `name` field. For direct service calls, the
   * resource name is incorporated into the request path based on the specific service
   * implementation and version.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsList(
    request: Projects.ApihubProjectsLocationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudLocationListLocationsResponse, Projects.ApihubProjectsLocationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          {
            name: "extraLocationTypes",
            value: request.extraLocationTypes,
            schema: s.optional(s.array(s.string())),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudLocationListLocationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsListError,
      },
      options,
    );
  }

  /**
   * Lookup runtime project attachment locations
   *
   * @remarks
   * Look up a runtime project attachment. This API can be called in the context of any project.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsLookupRuntimeProjectAttachment(
    request: Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse,
    Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}:lookupRuntimeProjectAttachment",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1LookupRuntimeProjectAttachmentResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsLookupRuntimeProjectAttachmentError,
      },
      options,
    );
  }

  /**
   * Cancel operations
   *
   * @remarks
   * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to
   * cancel the operation, but success is not guaranteed. If the server doesn't support this method,
   * it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other
   * methods to check whether the cancellation succeeded or whether the operation completed despite
   * cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an
   * operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to
   * `Code.CANCELLED`.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsOperationsCancelError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsOperationsCancel(
    request: Projects.ApihubProjectsLocationsOperationsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsOperationsCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsOperationsCancelError,
      },
      options,
    );
  }

  /**
   * Delete operations
   *
   * @remarks
   * Deletes a long-running operation. This method indicates that the client is no longer interested
   * in the operation result. It does not cancel the operation. If the server doesn't support this
   * method, it returns `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsOperationsDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsOperationsDelete(
    request: Projects.ApihubProjectsLocationsOperationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.ApihubProjectsLocationsOperationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsOperationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsOperationsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsOperationsGet(
    request: Projects.ApihubProjectsLocationsOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "operationsId", value: request.operationsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns `UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsOperationsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsOperationsList(
    request: Projects.ApihubProjectsLocationsOperationsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningListOperationsResponse,
    Projects.ApihubProjectsLocationsOperationsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningListOperationsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsOperationsListError,
      },
      options,
    );
  }

  /**
   * Create plugins
   *
   * @remarks
   * Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to
   * create plugin instances.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsCreate(
    request: Projects.ApihubProjectsLocationsPluginsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [{ name: "pluginId", value: request.pluginId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1PluginSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsCreateError,
      },
      options,
    );
  }

  /**
   * Delete plugins
   *
   * @remarks
   * Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsDelete(
    request: Projects.ApihubProjectsLocationsPluginsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsDeleteError,
      },
      options,
    );
  }

  /**
   * Disable plugins
   *
   * @remarks
   * Disables a plugin. The `state` of the plugin after disabling is `DISABLED`
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsDisableError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsDisable(
    request: Projects.ApihubProjectsLocationsPluginsDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsDisableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:disable",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsDisableError,
      },
      options,
    );
  }

  /**
   * Enable plugins
   *
   * @remarks
   * Enables a plugin. The `state` of the plugin after enabling is `ENABLED`
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsEnableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsEnable(
    request: Projects.ApihubProjectsLocationsPluginsEnableRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}:enable",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsEnableError,
      },
      options,
    );
  }

  /**
   * Get plugins
   *
   * @remarks
   * Get an API Hub plugin.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsGet(
    request: Projects.ApihubProjectsLocationsPluginsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1Plugin, Projects.ApihubProjectsLocationsPluginsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsGetError,
      },
      options,
    );
  }

  /**
   * Get style guide plugins
   *
   * @remarks
   * Get the style guide being used for linting.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsGetStyleGuideError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsGetStyleGuide(
    request: Projects.ApihubProjectsLocationsPluginsGetStyleGuideRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1StyleGuide, Projects.ApihubProjectsLocationsPluginsGetStyleGuideError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1StyleGuideSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsGetStyleGuideError,
      },
      options,
    );
  }

  /**
   * Create instances
   *
   * @remarks
   * Creates a Plugin instance in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesCreate(
    request: Projects.ApihubProjectsLocationsPluginsInstancesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [
          { name: "pluginInstanceId", value: request.pluginInstanceId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1PluginInstanceSchema },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesCreateError,
      },
      options,
    );
  }

  /**
   * Delete instances
   *
   * @remarks
   * Deletes a plugin instance in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesDelete(
    request: Projects.ApihubProjectsLocationsPluginsInstancesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleLongrunningOperation, Projects.ApihubProjectsLocationsPluginsInstancesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesDeleteError,
      },
      options,
    );
  }

  /**
   * Disable action instances
   *
   * @remarks
   * Disables a plugin instance in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesDisableActionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesDisableAction(
    request: Projects.ApihubProjectsLocationsPluginsInstancesDisableActionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    Projects.ApihubProjectsLocationsPluginsInstancesDisableActionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:disableAction",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1DisablePluginInstanceActionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesDisableActionError,
      },
      options,
    );
  }

  /**
   * Enable action instances
   *
   * @remarks
   * Enables a plugin instance in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesEnableActionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesEnableAction(
    request: Projects.ApihubProjectsLocationsPluginsInstancesEnableActionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    Projects.ApihubProjectsLocationsPluginsInstancesEnableActionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:enableAction",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1EnablePluginInstanceActionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesEnableActionError,
      },
      options,
    );
  }

  /**
   * Execute action instances
   *
   * @remarks
   * Executes a plugin instance in the API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesExecuteAction(
    request: Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:executeAction",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1ExecutePluginInstanceActionRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesExecuteActionError,
      },
      options,
    );
  }

  /**
   * Get instances
   *
   * @remarks
   * Get an API Hub plugin instance.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesGet(
    request: Projects.ApihubProjectsLocationsPluginsInstancesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1PluginInstance, Projects.ApihubProjectsLocationsPluginsInstancesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginInstanceSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesGetError,
      },
      options,
    );
  }

  /**
   * List instances
   *
   * @remarks
   * List all the plugins in a given project and location. `-` can be used as wildcard value for
   * {plugin_id}
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesList(
    request: Projects.ApihubProjectsLocationsPluginsInstancesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListPluginInstancesResponse,
    Projects.ApihubProjectsLocationsPluginsInstancesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListPluginInstancesResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesListError,
      },
      options,
    );
  }

  /**
   * Manage source data instances
   *
   * @remarks
   * Manages data for a given plugin instance.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesManageSourceData(
    request: Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}:manageSourceData",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1ManagePluginInstanceSourceDataRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesManageSourceDataError,
      },
      options,
    );
  }

  /**
   * Patch instances
   *
   * @remarks
   * Updates a plugin instance in the API hub. The following fields in the plugin_instance can be
   * updated currently: * display_name * schedule_cron_expression The update_mask should be used to
   * specify the fields being updated. To update the auth_config and additional_config of the plugin
   * instance, use the ApplyPluginInstanceConfig method.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsInstancesPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsInstancesPatch(
    request: Projects.ApihubProjectsLocationsPluginsInstancesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1PluginInstance,
    Projects.ApihubProjectsLocationsPluginsInstancesPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/instances/{instancesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
          { name: "instancesId", value: request.instancesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1PluginInstanceSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1PluginInstanceSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsInstancesPatchError,
      },
      options,
    );
  }

  /**
   * List plugins
   *
   * @remarks
   * List all the plugins in a given project and location.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsList(
    request: Projects.ApihubProjectsLocationsPluginsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1ListPluginsResponse, Projects.ApihubProjectsLocationsPluginsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/plugins"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListPluginsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsListError,
      },
      options,
    );
  }

  /**
   * Get contents styleGuide
   *
   * @remarks
   * Get the contents of the style guide.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsStyleGuideGetContents(
    request: Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1StyleGuideContents,
    Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide:contents",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1StyleGuideContentsSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsStyleGuideGetContentsError,
      },
      options,
    );
  }

  /**
   * Update style guide plugins
   *
   * @remarks
   * Update the styleGuide to be used for liniting in by API hub.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsPluginsUpdateStyleGuide(
    request: Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApihubV1StyleGuide, Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/plugins/{pluginsId}/styleGuide",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "pluginsId", value: request.pluginsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1StyleGuideSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1StyleGuideSchema },
        errorFactory: Projects.ApihubProjectsLocationsPluginsUpdateStyleGuideError,
      },
      options,
    );
  }

  /**
   * Retrieve api views locations
   *
   * @remarks
   * Retrieve API views.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsRetrieveApiViewsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsRetrieveApiViews(
    request: Projects.ApihubProjectsLocationsRetrieveApiViewsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1RetrieveApiViewsResponse,
    Projects.ApihubProjectsLocationsRetrieveApiViewsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}:retrieveApiViews",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "view",
            value: request.view,
            schema: s.optional(s.lazy(() => viewApigeeProjectsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1RetrieveApiViewsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsRetrieveApiViewsError,
      },
      options,
    );
  }

  /**
   * Create runtimeProjectAttachments
   *
   * @remarks
   * Attaches a runtime project to the host project.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsRuntimeProjectAttachmentsCreate(
    request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1RuntimeProjectAttachment,
    Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          {
            name: "runtimeProjectAttachmentId",
            value: request.runtimeProjectAttachmentId,
            schema: s.optional(s.string()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1RuntimeProjectAttachmentSchema,
        },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1RuntimeProjectAttachmentSchema },
        errorFactory: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError,
      },
      options,
    );
  }

  /**
   * Delete runtimeProjectAttachments
   *
   * @remarks
   * Delete a runtime project attachment in the API Hub. This call will detach the runtime project
   * from the host project.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsRuntimeProjectAttachmentsDelete(
    request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "runtimeProjectAttachmentsId",
            value: request.runtimeProjectAttachmentsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError,
      },
      options,
    );
  }

  /**
   * Get runtimeProjectAttachments
   *
   * @remarks
   * Gets a runtime project attachment.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsRuntimeProjectAttachmentsGet(
    request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1RuntimeProjectAttachment,
    Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments/{runtimeProjectAttachmentsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          {
            name: "runtimeProjectAttachmentsId",
            value: request.runtimeProjectAttachmentsId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1RuntimeProjectAttachmentSchema },
        errorFactory: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsGetError,
      },
      options,
    );
  }

  /**
   * List runtimeProjectAttachments
   *
   * @remarks
   * List runtime projects attached to the host project.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsRuntimeProjectAttachmentsList(
    request: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse,
    Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/runtimeProjectAttachments",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1ListRuntimeProjectAttachmentsResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsRuntimeProjectAttachmentsListError,
      },
      options,
    );
  }

  /**
   * Search resources locations
   *
   * @remarks
   * Search across API-Hub resources.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsSearchResourcesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsSearchResources(
    request: Projects.ApihubProjectsLocationsSearchResourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleCloudApihubV1SearchResourcesResponse,
    Projects.ApihubProjectsLocationsSearchResourcesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}:searchResources",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleCloudApihubV1SearchResourcesRequestSchema },
      },
      {
        success: { kind: "json", schema: googleCloudApihubV1SearchResourcesResponseSchema },
        errorFactory: Projects.ApihubProjectsLocationsSearchResourcesError,
      },
      options,
    );
  }

  /**
   * Configure and deploy server servers
   *
   * @remarks
   * Configures and deploys a given server config for given target. Currently this API supports only
   * deploying MCP server in Apigee X. For mcp server deployment in apigee X, if there is already a
   * mcp proxy deployed, then this method will try to overwrite it by creating new revision i.e. all
   * existing tools will be removed and new set of tools will be deployed.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.ApihubProjectsLocationsServersConfigureAndDeployServerError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apihubProjectsLocationsServersConfigureAndDeployServer(
    request: Projects.ApihubProjectsLocationsServersConfigureAndDeployServerRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleLongrunningOperation,
    Projects.ApihubProjectsLocationsServersConfigureAndDeployServerError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/servers:configureAndDeployServer",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleCloudApihubV1ConfigureAndDeployServerRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleLongrunningOperationSchema },
        errorFactory: Projects.ApihubProjectsLocationsServersConfigureAndDeployServerError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type ApigeeProjectsProvisionOrganizationRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    body: GoogleCloudApigeeV1ProvisionOrganizationRequest;
  };

  export class ApigeeProjectsProvisionOrganizationError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigeeProjectsProvisionOrganizationError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAddonsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (addonsId). */
    addonsId: string;
  };

  export class ApihubProjectsLocationsAddonsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAddonsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAddonsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of addons. The only supported filter is
     * `plugin_instance_name`. It can be used to filter addons that are enabled for a given plugin
     * instance. The format of the filter is `plugin_instance_name =
     * "projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}"`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of hub addons to return. The service may return fewer than this
     * value. If unspecified, at most 50 hub addons will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAddons` call. Provide this to retrieve
     * the subsequent page. When paginating, all other parameters (except page_size) provided to
     * `ListAddons` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsAddonsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAddonsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAddonsManageConfigRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (addonsId). */
    addonsId: string;
    body: GoogleCloudApihubV1ManageAddonConfigRequest;
  };

  export class ApihubProjectsLocationsAddonsManageConfigError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAddonsManageConfigError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApiHubInstancesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of the
     * parent resource. If the field is not provided, system generated id will be used. This value
     * should be 4-40 characters, and valid characters are `/a-z[0-9]-_/`.
     */
    apiHubInstanceId?: string;
    body: GoogleCloudApihubV1ApiHubInstance;
  };

  export class ApihubProjectsLocationsApiHubInstancesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApiHubInstancesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApiHubInstancesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apiHubInstancesId). */
    apiHubInstancesId: string;
  };

  export class ApihubProjectsLocationsApiHubInstancesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApiHubInstancesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApiHubInstancesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apiHubInstancesId). */
    apiHubInstancesId: string;
  };

  export class ApihubProjectsLocationsApiHubInstancesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApiHubInstancesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApiHubInstancesLookupRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class ApihubProjectsLocationsApiHubInstancesLookupError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApiHubInstancesLookupError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApiHubInstancesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apiHubInstancesId). */
    apiHubInstancesId: string;
    /** Optional. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1ApiHubInstance;
  };

  export class ApihubProjectsLocationsApiHubInstancesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApiHubInstancesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the API resource, which will become the final component of the
     * API's resource name. This field is optional. * If provided, the same will be used. The
     * service will throw an error if the specified id is already used by another API resource in
     * the API hub. * If not provided, a system generated id will be used. This value should be
     * 4-500 characters, and valid characters are /a-z[0-9]-_/.
     */
    apiId?: string;
    body: GoogleCloudApihubV1Api;
  };

  export class ApihubProjectsLocationsApisCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /**
     * Optional. If set to true, any versions from this API will also be deleted. Otherwise, the
     * request will only work if the API has no versions.
     */
    force?: boolean;
  };

  export class ApihubProjectsLocationsApisDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
  };

  export class ApihubProjectsLocationsApisGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of ApiResources. A filter expression consists
     * of a field name, a comparison operator, and a value for filtering. The value must be a
     * string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case
     * sensitive. The following fields in the `ApiResource` are eligible for filtering: *
     * `owner.email` - The email of the team which owns the ApiResource. Allowed comparison
     * operators: `=`. * `create_time` - The time at which the ApiResource was created. The value
     * should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison
     * operators: `>` and `<`. * `display_name` - The display name of the ApiResource. Allowed
     * comparison operators: `=`. * `target_user.enum_values.values.id` - The allowed value id of
     * the target users attribute associated with the ApiResource. Allowed comparison operator is
     * `:`. * `target_user.enum_values.values.display_name` - The allowed value display name of the
     * target users attribute associated with the ApiResource. Allowed comparison operator is `:`. *
     * `team.enum_values.values.id` - The allowed value id of the team attribute associated with the
     * ApiResource. Allowed comparison operator is `:`. * `team.enum_values.values.display_name` -
     * The allowed value display name of the team attribute associated with the ApiResource. Allowed
     * comparison operator is `:`. * `business_unit.enum_values.values.id` - The allowed value id of
     * the business unit attribute associated with the ApiResource. Allowed comparison operator is
     * `:`. * `business_unit.enum_values.values.display_name` - The allowed value display name of
     * the business unit attribute associated with the ApiResource. Allowed comparison operator is
     * `:`. * `maturity_level.enum_values.values.id` - The allowed value id of the maturity level
     * attribute associated with the ApiResource. Allowed comparison operator is `:`. *
     * `maturity_level.enum_values.values.display_name` - The allowed value display name of the
     * maturity level attribute associated with the ApiResource. Allowed comparison operator is `:`.
     * * `api_style.enum_values.values.id` - The allowed value id of the api style attribute
     * associated with the ApiResource. Allowed comparison operator is `:`. *
     * `api_style.enum_values.values.display_name` - The allowed value display name of the api style
     * attribute associated with the ApiResource. Allowed comparison operator is `:`. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the
     * user defined enum attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user
     * defined enum attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value
     * display name of the user defined enum attribute associated with the Resource. Allowed
     * comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder
     * that can be replaced with any user defined enum attribute enum name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user
     * defined string attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-string is a placeholder that can be replaced with any user
     * defined string attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user
     * defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here
     * user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON
     * attribute name. A filter function is also supported in the filter string. The filter function
     * is `id(name)`. The `id(name)` function returns the id of the resource name. For example,
     * `id(name) = \"api-1\"` is equivalent to `name =
     * \"projects/test-project-id/locations/test-location-id/apis/api-1\"` provided the parent is
     * `projects/test-project-id/locations/test-location-id`. Another supported filter function is
     * `plugins(source_metadata)`. This function filters for resources that are associated with a
     * specific plugin. For example, `plugins(source_metadata) :
     * "projects/test-project-id/locations/test-location-id/plugins/test-plugin-id"` will return
     * resources sourced from the given plugin. Expressions are combined with either `AND` logic
     * operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or
     * `OR` operator can be used throughout the filter string and both the operators cannot be used
     * together. No other logical operators are supported. At most three filter fields are allowed
     * in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned
     * by the API. Here are a few examples: * `owner.email = \"apihub@google.com\"` - - The owner
     * team email is _apihub@google.com_. * `owner.email = \"apihub@google.com\" AND create_time <
     * \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The owner team email
     * is _apihub@google.com_ and the api was created before _2021-08-15 14:50:00 UTC_ and after
     * _2021-08-10 12:00:00 UTC_. * `owner.email = \"apihub@google.com\" OR
     * team.enum_values.values.id: apihub-team-id` - The filter string specifies the APIs where the
     * owner team email is _apihub@google.com_ or the id of the allowed value associated with the
     * team attribute is _apihub-team-id_. * `owner.email = \"apihub@google.com\" OR
     * team.enum_values.values.display_name: ApiHub Team` - The filter string specifies the APIs
     * where the owner team email is _apihub@google.com_ or the display name of the allowed value
     * associated with the team attribute is `ApiHub Team`. * `owner.email = \"apihub@google.com\"
     * AND attributes.projects/test-project-id/locations/test-location-id/
     * attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND
     * attributes.projects/test-project-id/locations/test-location-id/
     * attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value` -
     * The filter string specifies the APIs where the owner team email is _apihub@google.com_ and
     * the id of the allowed value associated with the user defined attribute of type enum is
     * _test_enum_id_ and the value of the user defined attribute of type string is _test_..
     */
    filter?: string;
    /**
     * Optional. The maximum number of API resources to return. The service may return fewer than
     * this value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListApis` call. Provide this to retrieve
     * the subsequent page. When paginating, all other parameters (except page_size) provided to
     * `ListApis` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsApisListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Api;
  };

  export class ApihubProjectsLocationsApisPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /**
     * Optional. The ID to use for the API version, which will become the final component of the
     * version's resource name. This field is optional. * If provided, the same will be used. The
     * service will throw an error if the specified id is already used by another version in the API
     * resource. * If not provided, a system generated id will be used. This value should be 4-500
     * characters, overall resource name which will be of format
     * `projects/{project}/locations/{location}/apis/{api}/versions/{version}`, its length is
     * limited to 700 characters and valid characters are /a-z[0-9]-_/.
     */
    versionId?: string;
    body: GoogleCloudApihubV1Version;
  };

  export class ApihubProjectsLocationsApisVersionsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsDefinitionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (definitionsId). */
    definitionsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsDefinitionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsDefinitionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /**
     * Optional. If set to true, any specs from this version will also be deleted. Otherwise, the
     * request will only work if the version has no specs.
     */
    force?: boolean;
  };

  export class ApihubProjectsLocationsApisVersionsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /**
     * Optional. An expression that filters the list of Versions. A filter expression consists of a
     * field name, a comparison operator, and a value for filtering. The value must be a string, a
     * number, or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are
     * not case sensitive. The following fields in the `Version` are eligible for filtering: *
     * `display_name` - The display name of the Version. Allowed comparison operators: `=`. *
     * `create_time` - The time at which the Version was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and
     * `<`. * `lifecycle.enum_values.values.id` - The allowed value id of the lifecycle attribute
     * associated with the Version. Allowed comparison operators: `:`. *
     * `lifecycle.enum_values.values.display_name` - The allowed value display name of the lifecycle
     * attribute associated with the Version. Allowed comparison operators: `:`. *
     * `compliance.enum_values.values.id` - The allowed value id of the compliances attribute
     * associated with the Version. Allowed comparison operators: `:`. *
     * `compliance.enum_values.values.display_name` - The allowed value display name of the
     * compliances attribute associated with the Version. Allowed comparison operators: `:`. *
     * `accreditation.enum_values.values.id` - The allowed value id of the accreditations attribute
     * associated with the Version. Allowed comparison operators: `:`. *
     * `accreditation.enum_values.values.display_name` - The allowed value display name of the
     * accreditations attribute associated with the Version. Allowed comparison operators: `:`. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the
     * user defined enum attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user
     * defined enum attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value
     * display name of the user defined enum attribute associated with the Resource. Allowed
     * comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder
     * that can be replaced with any user defined enum attribute enum name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user
     * defined string attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-string is a placeholder that can be replaced with any user
     * defined string attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user
     * defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here
     * user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON
     * attribute name. Expressions are combined with either `AND` logic operator or `OR` logical
     * operator but not both of them together i.e. only one of the `AND` or `OR` operator can be
     * used throughout the filter string and both the operators cannot be used together. No other
     * logical operators are supported. At most three filter fields are allowed in the filter string
     * and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are
     * a few examples: * `lifecycle.enum_values.values.id: preview-id` - The filter string specifies
     * that the id of the allowed value associated with the lifecycle attribute of the Version is
     * _preview-id_. * `lifecycle.enum_values.values.display_name: \"Preview Display Name\"` - The
     * filter string specifies that the display name of the allowed value associated with the
     * lifecycle attribute of the Version is `Preview Display Name`. *
     * `lifecycle.enum_values.values.id: preview-id AND create_time < \"2021-08-15T14:50:00Z\" AND
     * create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed value associated with the
     * lifecycle attribute of the Version is _preview-id_ and it was created before _2021-08-15
     * 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `compliance.enum_values.values.id:
     * gdpr-id OR compliance.enum_values.values.id: pci-dss-id` - The id of the allowed value
     * associated with the compliance attribute is _gdpr-id_ or _pci-dss-id_. *
     * `lifecycle.enum_values.values.id: preview-id AND
     * attributes.projects/test-project-id/locations/test-location-id/
     * attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter
     * string specifies that the id of the allowed value associated with the lifecycle attribute of
     * the Version is _preview-id_ and the value of the user defined attribute of type string is
     * _test_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of versions to return. The service may return fewer than this
     * value. If unspecified, at most 50 versions will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListVersions` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters (except page_size)
     * provided to `ListVersions` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsApisVersionsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsOperationsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /**
     * Optional. The ID to use for the operation resource, which will become the final component of
     * the operation's resource name. This field is optional. * If provided, the same will be used.
     * The service will throw an error if the specified id is already used by another operation
     * resource in the API hub. * If not provided, a system generated id will be used. This value
     * should be 4-500 characters, overall resource name which will be of format
     * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`,
     * its length is limited to 1000 characters, and valid characters are /a-z[0-9]-_/.
     */
    apiOperationId?: string;
    body: GoogleCloudApihubV1ApiOperation;
  };

  export class ApihubProjectsLocationsApisVersionsOperationsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsOperationsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /**
     * Optional. An expression that filters the list of ApiOperations. A filter expression consists
     * of a field name, a comparison operator, and a value for filtering. The value must be a string
     * or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case
     * sensitive. The following fields in the `ApiOperation` are eligible for filtering: * `name` -
     * The ApiOperation resource name. Allowed comparison operators: `=`. *
     * `details.http_operation.path.path` - The http operation's complete path relative to server
     * endpoint. Allowed comparison operators: `=`. * `details.http_operation.method` - The http
     * operation method type. Allowed comparison operators: `=`. * `details.deprecated` - Indicates
     * if the ApiOperation is deprecated. Allowed values are True / False indicating the deprycation
     * status of the ApiOperation. Allowed comparison operators: `=`. * `create_time` - The time at
     * which the ApiOperation was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and
     * `<`. * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the
     * user defined enum attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user
     * defined enum attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value
     * display name of the user defined enum attribute associated with the Resource. Allowed
     * comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder
     * that can be replaced with any user defined enum attribute enum name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user
     * defined string attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-string is a placeholder that can be replaced with any user
     * defined string attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user
     * defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here
     * user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON
     * attribute name. Expressions are combined with either `AND` logic operator or `OR` logical
     * operator but not both of them together i.e. only one of the `AND` or `OR` operator can be
     * used throughout the filter string and both the operators cannot be used together. No other
     * logical operators are supported. At most three filter fields are allowed in the filter string
     * and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are
     * a few examples: * `details.deprecated = True` - The ApiOperation is deprecated. *
     * `details.http_operation.method = GET AND create_time < \"2021-08-15T14:50:00Z\" AND
     * create_time > \"2021-08-10T12:00:00Z\"` - The method of the http operation of the
     * ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after
     * _2021-08-10 12:00:00 UTC_. * `details.http_operation.method = GET OR
     * details.http_operation.method = POST`. - The http operation of the method of ApiOperation is
     * _GET_ or _POST_. * `details.deprecated = True AND
     * attributes.projects/test-project-id/locations/test-location-id/
     * attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter
     * string specifies that the ApiOperation is deprecated and the value of the user defined
     * attribute of type string is _test_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of operations to return. The service may return fewer than this
     * value. If unspecified, at most 50 operations will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListApiOperations` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters (except page_size)
     * provided to `ListApiOperations` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsApisVersionsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsOperationsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1ApiOperation;
  };

  export class ApihubProjectsLocationsApisVersionsOperationsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsOperationsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Version;
  };

  export class ApihubProjectsLocationsApisVersionsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /**
     * Optional. The ID to use for the spec, which will become the final component of the spec's
     * resource name. This field is optional. * If provided, the same will be used. The service will
     * throw an error if the specified id is already used by another spec in the API resource. * If
     * not provided, a system generated id will be used. This value should be 4-500 characters,
     * overall resource name which will be of format
     * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`, its
     * length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
     */
    specId?: string;
    body: GoogleCloudApihubV1Spec;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
    /** Optional. The type of the spec contents to be retrieved. */
    specContentType?: SpecContentType1;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsFetchAdditionalSpecContentError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsGetContentsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsGetContentsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsGetContentsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsLintRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
    body: Record<string, unknown>;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsLintError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsLintError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /**
     * Optional. An expression that filters the list of Specs. A filter expression consists of a
     * field name, a comparison operator, and a value for filtering. The value must be a string. The
     * comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case sensitive. The
     * following fields in the `Spec` are eligible for filtering: * `display_name` - The display
     * name of the Spec. Allowed comparison operators: `=`. * `create_time` - The time at which the
     * Spec was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339]
     * format. Allowed comparison operators: `>` and `<`. * `spec_type.enum_values.values.id` - The
     * allowed value id of the spec_type attribute associated with the Spec. Allowed comparison
     * operators: `:`. * `spec_type.enum_values.values.display_name` - The allowed value display
     * name of the spec_type attribute associated with the Spec. Allowed comparison operators: `:`.
     * * `lint_response.json_values.values` - The json value of the lint_response attribute
     * associated with the Spec. Allowed comparison operators: `:`. * `mime_type` - The MIME type of
     * the Spec. Allowed comparison operators: `=`. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the
     * user defined enum attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user
     * defined enum attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value
     * display name of the user defined enum attribute associated with the Resource. Allowed
     * comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder
     * that can be replaced with any user defined enum attribute enum name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user
     * defined string attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-string is a placeholder that can be replaced with any user
     * defined string attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user
     * defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here
     * user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON
     * attribute name. Expressions are combined with either `AND` logic operator or `OR` logical
     * operator but not both of them together i.e. only one of the `AND` or `OR` operator can be
     * used throughout the filter string and both the operators cannot be used together. No other
     * logical operators are supported. At most three filter fields are allowed in the filter string
     * and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are
     * a few examples: * `spec_type.enum_values.values.id: rest-id` - The filter string specifies
     * that the id of the allowed value associated with the spec_type attribute is _rest-id_. *
     * `spec_type.enum_values.values.display_name: \"Rest Display Name\"` - The filter string
     * specifies that the display name of the allowed value associated with the spec_type attribute
     * is `Rest Display Name`. * `spec_type.enum_values.values.id: grpc-id AND create_time <
     * \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed
     * value associated with the spec_type attribute is _grpc-id_ and the spec was created before
     * _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. *
     * `spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id` - The
     * id of the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. *
     * `spec_type.enum_values.values.id: rest-id AND
     * attributes.projects/test-project-id/locations/test-location-id/
     * attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test` - The filter
     * string specifies that the id of the allowed value associated with the spec_type attribute is
     * _rest-id_ and the id of the allowed value associated with the user defined attribute of type
     * enum is _test_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of specs to return. The service may return fewer than this
     * value. If unspecified, at most 50 specs will be returned. The maximum value is 1000; values
     * above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSpecs` call. Provide this to retrieve
     * the subsequent page. When paginating, all other parameters provided to `ListSpecs` must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsApisVersionsSpecsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (apisId). */
    apisId: string;
    /** Resource name segment (versionsId). */
    versionsId: string;
    /** Resource name segment (specsId). */
    specsId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Spec;
  };

  export class ApihubProjectsLocationsApisVersionsSpecsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsApisVersionsSpecsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAttributesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the attribute, which will become the final component of the
     * attribute's resource name. This field is optional. * If provided, the same will be used. The
     * service will throw an error if the specified id is already used by another attribute resource
     * in the API hub. * If not provided, a system generated id will be used. This value should be
     * 4-500 characters, and valid characters are /a-z[0-9]-_/.
     */
    attributeId?: string;
    body: GoogleCloudApihubV1Attribute;
  };

  export class ApihubProjectsLocationsAttributesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAttributesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAttributesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (attributesId). */
    attributesId: string;
  };

  export class ApihubProjectsLocationsAttributesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAttributesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAttributesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (attributesId). */
    attributesId: string;
  };

  export class ApihubProjectsLocationsAttributesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAttributesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAttributesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of Attributes. A filter expression consists of
     * a field name, a comparison operator, and a value for filtering. The value must be a string or
     * a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case
     * sensitive. The following fields in the `Attribute` are eligible for filtering: *
     * `display_name` - The display name of the Attribute. Allowed comparison operators: `=`. *
     * `definition_type` - The definition type of the attribute. Allowed comparison operators: `=`.
     * * `scope` - The scope of the attribute. Allowed comparison operators: `=`. * `data_type` -
     * The type of the data of the attribute. Allowed comparison operators: `=`. * `mandatory` -
     * Denotes whether the attribute is mandatory or not. Allowed comparison operators: `=`. *
     * `create_time` - The time at which the Attribute was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and
     * `<`. Expressions are combined with either `AND` logic operator or `OR` logical operator but
     * not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout
     * the filter string and both the operators cannot be used together. No other logical operators
     * are supported. At most three filter fields are allowed in the filter string and if provided
     * more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples:
     * * `display_name = production` - - The display name of the attribute is _production_. *
     * `(display_name = production) AND (create_time < \"2021-08-15T14:50:00Z\") AND (create_time >
     * \"2021-08-10T12:00:00Z\")` - The display name of the attribute is _production_ and the
     * attribute was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. *
     * `display_name = production OR scope = api` - The attribute where the display name is
     * _production_ or the scope is _api_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of attribute resources to return. The service may return fewer
     * than this value. If unspecified, at most 50 attributes will be returned. The maximum value is
     * 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAttributes` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListAttributes` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsAttributesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAttributesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsAttributesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (attributesId). */
    attributesId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Attribute;
  };

  export class ApihubProjectsLocationsAttributesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsAttributesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCollectApiDataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: GoogleCloudApihubV1CollectApiDataRequest;
  };

  export class ApihubProjectsLocationsCollectApiDataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCollectApiDataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCurationsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the curation resource, which will become the final component of
     * the curations's resource name. This field is optional. * If provided, the same will be used.
     * The service will throw an error if the specified ID is already used by another curation
     * resource in the API hub. * If not provided, a system generated ID will be used. This value
     * should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     */
    curationId?: string;
    body: GoogleCloudApihubV1Curation;
  };

  export class ApihubProjectsLocationsCurationsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCurationsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCurationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (curationsId). */
    curationsId: string;
  };

  export class ApihubProjectsLocationsCurationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCurationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCurationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (curationsId). */
    curationsId: string;
  };

  export class ApihubProjectsLocationsCurationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCurationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCurationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of curation resources. A filter expression
     * consists of a field name, a comparison operator, and a value for filtering. The value must be
     * a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are case
     * insensitive. The following fields in the `curation resource` are eligible for filtering: *
     * `create_time` - The time at which the curation was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and
     * `<`. * `display_name` - The display name of the curation. Allowed comparison operators: `=`.
     * * `state` - The state of the curation. Allowed comparison operators: `=`. Expressions are
     * combined with either `AND` logic operator or `OR` logical operator but not both of them
     * together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string
     * and both the operators cannot be used together. No other logical operators are supported. At
     * most three filter fields are allowed in the filter string and if provided more than that then
     * `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `create_time <
     * \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The curation resource
     * was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of curation resources to return. The service may return fewer
     * than this value. If unspecified, at most 50 curations will be returned. The maximum value is
     * 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCurations` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters (except page_size)
     * provided to `ListCurations` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsCurationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCurationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsCurationsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (curationsId). */
    curationsId: string;
    /** Optional. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Curation;
  };

  export class ApihubProjectsLocationsCurationsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsCurationsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDependenciesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the dependency resource, which will become the final component of
     * the dependency's resource name. This field is optional. * If provided, the same will be used.
     * The service will throw an error if duplicate id is provided by the client. * If not provided,
     * a system generated id will be used. This value should be 4-500 characters, and valid
     * characters are `a-z[0-9]-_`.
     */
    dependencyId?: string;
    body: GoogleCloudApihubV1Dependency;
  };

  export class ApihubProjectsLocationsDependenciesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDependenciesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDependenciesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (dependenciesId). */
    dependenciesId: string;
  };

  export class ApihubProjectsLocationsDependenciesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDependenciesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDependenciesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (dependenciesId). */
    dependenciesId: string;
  };

  export class ApihubProjectsLocationsDependenciesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDependenciesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDependenciesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of Dependencies. A filter expression consists
     * of a field name, a comparison operator, and a value for filtering. The value must be a
     * string. Allowed comparison operator is `=`. Filters are not case sensitive. The following
     * fields in the `Dependency` are eligible for filtering: * `consumer.operation_resource_name` -
     * The operation resource name for the consumer entity involved in a dependency. Allowed
     * comparison operators: `=`. * `consumer.external_api_resource_name` - The external api
     * resource name for the consumer entity involved in a dependency. Allowed comparison operators:
     * `=`. * `supplier.operation_resource_name` - The operation resource name for the supplier
     * entity involved in a dependency. Allowed comparison operators: `=`. *
     * `supplier.external_api_resource_name` - The external api resource name for the supplier
     * entity involved in a dependency. Allowed comparison operators: `=`. Expressions are combined
     * with either `AND` logic operator or `OR` logical operator but not both of them together i.e.
     * only one of the `AND` or `OR` operator can be used throughout the filter string and both the
     * operators cannot be used together. No other logical operators are supported. At most three
     * filter fields are allowed in the filter string and if provided more than that then
     * `INVALID_ARGUMENT` error is returned by the API. For example,
     * `consumer.operation_resource_name =
     * \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR
     * supplier.operation_resource_name =
     * \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"` - The dependencies with
     * either consumer or supplier operation resource name as
     * _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of dependency resources to return. The service may return fewer
     * than this value. If unspecified, at most 50 dependencies will be returned. The maximum value
     * is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDependencies` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListDependencies` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsDependenciesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDependenciesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDependenciesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (dependenciesId). */
    dependenciesId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Dependency;
  };

  export class ApihubProjectsLocationsDependenciesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDependenciesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDeploymentsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the deployment resource, which will become the final component of
     * the deployment's resource name. This field is optional. * If provided, the same will be used.
     * The service will throw an error if the specified id is already used by another deployment
     * resource in the API hub. * If not provided, a system generated id will be used. This value
     * should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     */
    deploymentId?: string;
    body: GoogleCloudApihubV1Deployment;
  };

  export class ApihubProjectsLocationsDeploymentsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDeploymentsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDeploymentsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (deploymentsId). */
    deploymentsId: string;
  };

  export class ApihubProjectsLocationsDeploymentsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDeploymentsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDeploymentsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (deploymentsId). */
    deploymentsId: string;
  };

  export class ApihubProjectsLocationsDeploymentsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDeploymentsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDeploymentsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of Deployments. A filter expression consists of
     * a field name, a comparison operator, and a value for filtering. The value must be a string.
     * The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The
     * following fields in the `Deployments` are eligible for filtering: * `display_name` - The
     * display name of the Deployment. Allowed comparison operators: `=`. * `create_time` - The time
     * at which the Deployment was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and
     * `<`. * `resource_uri` - A URI to the deployment resource. Allowed comparison operators: `=`.
     * * `api_versions` - The API versions linked to this deployment. Allowed comparison operators:
     * `:`. * `source_project` - The project/organization at source for the deployment. Allowed
     * comparison operators: `=`. * `source_environment` - The environment at source for the
     * deployment. Allowed comparison operators: `=`. * `deployment_type.enum_values.values.id` -
     * The allowed value id of the deployment_type attribute associated with the Deployment. Allowed
     * comparison operators: `:`. * `deployment_type.enum_values.values.display_name` - The allowed
     * value display name of the deployment_type attribute associated with the Deployment. Allowed
     * comparison operators: `:`. * `slo.string_values.values` -The allowed string value of the slo
     * attribute associated with the deployment. Allowed comparison operators: `:`. *
     * `environment.enum_values.values.id` - The allowed value id of the environment attribute
     * associated with the deployment. Allowed comparison operators: `:`. *
     * `environment.enum_values.values.display_name` - The allowed value display name of the
     * environment attribute associated with the deployment. Allowed comparison operators: `:`. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the
     * user defined enum attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user
     * defined enum attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value
     * display name of the user defined enum attribute associated with the Resource. Allowed
     * comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder
     * that can be replaced with any user defined enum attribute enum name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user
     * defined string attribute associated with the Resource. Allowed comparison operator is `:`.
     * Here user-defined-attribute-string is a placeholder that can be replaced with any user
     * defined string attribute name. *
     * `attributes.projects/test-project-id/locations/test-location-id/
     * attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user
     * defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here
     * user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON
     * attribute name. A filter function is also supported in the filter string. The filter function
     * is `id(name)`. The `id(name)` function returns the id of the resource name. For example,
     * `id(name) = \"deployment-1\"` is equivalent to `name =
     * \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"` provided
     * the parent is `projects/test-project-id/locations/test-location-id`. Expressions are combined
     * with either `AND` logic operator or `OR` logical operator but not both of them together i.e.
     * only one of the `AND` or `OR` operator can be used throughout the filter string and both the
     * operators cannot be used together. No other logical operators are supported. At most three
     * filter fields are allowed in the filter string and if provided more than that then
     * `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: *
     * `environment.enum_values.values.id: staging-id` - The allowed value id of the environment
     * attribute associated with the Deployment is _staging-id_. *
     * `environment.enum_values.values.display_name: \"Staging Deployment\"` - The allowed value
     * display name of the environment attribute associated with the Deployment is `Staging
     * Deployment`. * `environment.enum_values.values.id: production-id AND create_time <
     * \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The allowed value id
     * of the environment attribute associated with the Deployment is _production-id_ and Deployment
     * was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. *
     * `environment.enum_values.values.id: production-id OR slo.string_values.values: \"99.99%\"` -
     * The allowed value id of the environment attribute Deployment is _production-id_ or string
     * value of the slo attribute is _99.99%_. * `environment.enum_values.values.id: staging-id AND
     * attributes.projects/test-project-id/locations/test-location-id/
     * attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter
     * string specifies that the allowed value id of the environment attribute associated with the
     * Deployment is _staging-id_ and the value of the user defined attribute of type string is
     * _test_.
     */
    filter?: string;
    /**
     * Optional. The maximum number of deployment resources to return. The service may return fewer
     * than this value. If unspecified, at most 50 deployments will be returned. The maximum value
     * is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDeployments` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters (except page_size)
     * provided to `ListDeployments` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsDeploymentsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDeploymentsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDeploymentsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (deploymentsId). */
    deploymentsId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1Deployment;
  };

  export class ApihubProjectsLocationsDeploymentsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDeploymentsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (discoveredApiObservationsId). */
    discoveredApiObservationsId: string;
    /** Resource name segment (discoveredApiOperationsId). */
    discoveredApiOperationsId: string;
  };

  export class ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsGetError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (discoveredApiObservationsId). */
    discoveredApiObservationsId: string;
    /**
     * Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above
     * 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDiscoveredApiApiOperations` call.
     * Provide this to retrieve the subsequent page. When paginating, all other parameters provided
     * to `ListDiscoveredApiApiOperations` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDiscoveredApiObservationsDiscoveredApiOperationsListError> =
      [{ on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } }];
  }

  export type ApihubProjectsLocationsDiscoveredApiObservationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (discoveredApiObservationsId). */
    discoveredApiObservationsId: string;
  };

  export class ApihubProjectsLocationsDiscoveredApiObservationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDiscoveredApiObservationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsDiscoveredApiObservationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The maximum number of ApiObservations to return. The service may return fewer than
     * this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is
     * 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListApiObservations` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListApiObservations` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsDiscoveredApiObservationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsDiscoveredApiObservationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsExternalApisCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the External API resource, which will become the final component
     * of the External API's resource name. This field is optional. * If provided, the same will be
     * used. The service will throw an error if the specified id is already used by another External
     * API resource in the API hub. * If not provided, a system generated id will be used. This
     * value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     */
    externalApiId?: string;
    body: GoogleCloudApihubV1ExternalApi;
  };

  export class ApihubProjectsLocationsExternalApisCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsExternalApisCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsExternalApisDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (externalApisId). */
    externalApisId: string;
  };

  export class ApihubProjectsLocationsExternalApisDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsExternalApisDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsExternalApisGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (externalApisId). */
    externalApisId: string;
  };

  export class ApihubProjectsLocationsExternalApisGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsExternalApisGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsExternalApisListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The maximum number of External API resources to return. The service may return
     * fewer than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum
     * value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListExternalApis` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters (except page_size)
     * provided to `ListExternalApis` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsExternalApisListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsExternalApisListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsExternalApisPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (externalApisId). */
    externalApisId: string;
    /** Required. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1ExternalApi;
  };

  export class ApihubProjectsLocationsExternalApisPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsExternalApisPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsGeneratedSpecApisGenerateSpecRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (generatedSpecApisId). */
    generatedSpecApisId: string;
    body: GoogleCloudApihubV1GenerateSpecRequest;
  };

  export class ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsGeneratedSpecApisGenerateSpecError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsGeneratedSpecApisGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (generatedSpecApisId). */
    generatedSpecApisId: string;
  };

  export class ApihubProjectsLocationsGeneratedSpecApisGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsGeneratedSpecApisGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsGeneratedSpecApisListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An AIP-160 filter. This release supports the fields `state` and
     * `source.source_type`, the `=` comparison operator only, and `AND` conjunction only. Examples:
     * - `state = "SPEC_GENERATED"` - `state = "SPEC_ASSOCIATED" AND source.source_type = APIGEE_X`
     */
    filter?: string;
    /**
     * Optional. The maximum number of results to return. The service may return fewer. If
     * unspecified, at most 50 will be returned. The maximum value is 1000; values above 1000 will
     * be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListGeneratedSpecApis` call. Provide this
     * to retrieve the subsequent page. When paginating, all other parameters (except `page_size`)
     * provided to `ListGeneratedSpecApis` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsGeneratedSpecApisListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsGeneratedSpecApisListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class ApihubProjectsLocationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsHostProjectRegistrationsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The ID to use for the Host Project Registration, which will become the final
     * component of the host project registration's resource name. The ID must be the same as the
     * Google cloud project specified in the host_project_registration.gcp_project field.
     */
    hostProjectRegistrationId?: string;
    body: GoogleCloudApihubV1HostProjectRegistration;
  };

  export class ApihubProjectsLocationsHostProjectRegistrationsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsHostProjectRegistrationsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsHostProjectRegistrationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (hostProjectRegistrationsId). */
    hostProjectRegistrationsId: string;
  };

  export class ApihubProjectsLocationsHostProjectRegistrationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsHostProjectRegistrationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsHostProjectRegistrationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of HostProjectRegistrations. A filter
     * expression consists of a field name, a comparison operator, and a value for filtering. The
     * value must be a string. All standard operators as documented at https://google.aip.dev/160
     * are supported. The following fields in the `HostProjectRegistration` are eligible for
     * filtering: * `name` - The name of the HostProjectRegistration. * `create_time` - The time at
     * which the HostProjectRegistration was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `gcp_project` - The Google cloud
     * project associated with the HostProjectRegistration.
     */
    filter?: string;
    /** Optional. Hint for how to order the results. */
    orderBy?: string;
    /**
     * Optional. The maximum number of host project registrations to return. The service may return
     * fewer than this value. If unspecified, at most 50 host project registrations will be
     * returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListHostProjectRegistrations` call. Provide
     * this to retrieve the subsequent page. When paginating, all other parameters (except
     * page_size) provided to `ListHostProjectRegistrations` must match the call that provided the
     * page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsHostProjectRegistrationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsHostProjectRegistrationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for
     * internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings
     * like `"displayName=tokyo"`, and is documented in more detail in
     * [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /** The maximum number of results to return. If not set, the service selects a default. */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token
     * to receive the subsequent page.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsLookupRuntimeProjectAttachmentRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
  };

  export class ApihubProjectsLocationsLookupRuntimeProjectAttachmentError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsLookupRuntimeProjectAttachmentError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsOperationsCancelRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
    body: Record<string, unknown>;
  };

  export class ApihubProjectsLocationsOperationsCancelError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsOperationsCancelError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsOperationsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApihubProjectsLocationsOperationsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsOperationsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsOperationsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class ApihubProjectsLocationsOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsOperationsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** The standard list filter. */
    filter?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field. This can only be
     * `true` when reading across collections. For example, when `parent` is set to
     * `"projects/example/locations/-"`. This field is not supported by default and will result in
     * an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class ApihubProjectsLocationsOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. The ID to use for the Plugin resource, which will become the final component of the
     * Plugin's resource name. This field is optional. * If provided, the same will be used. The
     * service will throw an error if the specified id is already used by another Plugin resource in
     * the API hub instance. * If not provided, a system generated id will be used. This value
     * should be 4-63 characters, overall resource name which will be of format
     * `projects/{project}/locations/{location}/plugins/{plugin}`, its length is limited to 1000
     * characters and valid characters are /a-z[0-9]-_/.
     */
    pluginId?: string;
    body: GoogleCloudApihubV1Plugin;
  };

  export class ApihubProjectsLocationsPluginsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
  };

  export class ApihubProjectsLocationsPluginsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsDisableRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    body: Record<string, unknown>;
  };

  export class ApihubProjectsLocationsPluginsDisableError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsDisableError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsEnableRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    body: Record<string, unknown>;
  };

  export class ApihubProjectsLocationsPluginsEnableError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsEnableError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
  };

  export class ApihubProjectsLocationsPluginsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsGetStyleGuideRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
  };

  export class ApihubProjectsLocationsPluginsGetStyleGuideError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsGetStyleGuideError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /**
     * Optional. The ID to use for the plugin instance, which will become the final component of the
     * plugin instance's resource name. This field is optional. * If provided, the same will be
     * used. The service will throw an error if the specified id is already used by another plugin
     * instance in the plugin resource. * If not provided, a system generated id will be used. This
     * value should be 4-63 characters, and valid characters are /a-z[0-9]-_/.
     */
    pluginInstanceId?: string;
    body: GoogleCloudApihubV1PluginInstance;
  };

  export class ApihubProjectsLocationsPluginsInstancesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
  };

  export class ApihubProjectsLocationsPluginsInstancesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesDisableActionRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
    body: GoogleCloudApihubV1DisablePluginInstanceActionRequest;
  };

  export class ApihubProjectsLocationsPluginsInstancesDisableActionError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesDisableActionError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesEnableActionRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
    body: GoogleCloudApihubV1EnablePluginInstanceActionRequest;
  };

  export class ApihubProjectsLocationsPluginsInstancesEnableActionError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesEnableActionError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesExecuteActionRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
    body: GoogleCloudApihubV1ExecutePluginInstanceActionRequest;
  };

  export class ApihubProjectsLocationsPluginsInstancesExecuteActionError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesExecuteActionError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
  };

  export class ApihubProjectsLocationsPluginsInstancesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /**
     * Optional. An expression that filters the list of plugin instances. A filter expression
     * consists of a field name, a comparison operator, and a value for filtering. The value must be
     * a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case
     * sensitive. The following fields in the `PluginInstances` are eligible for filtering: *
     * `state` - The state of the Plugin Instance. Allowed comparison operators: `=`. *
     * `source_project_id` - The source project id of the Plugin Instance. Allowed comparison
     * operators: `=`. A filter function is also supported in the filter string. The filter function
     * is `id(name)`. The `id(name)` function returns the id of the resource name. For example,
     * `id(name) = \"plugin-instance-1\"` is equivalent to `name =
     * \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"`
     * provided the parent is
     * `projects/test-project-id/locations/test-location-id/plugins/plugin-1`. Expressions are
     * combined with either `AND` logic operator or `OR` logical operator but not both of them
     * together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string
     * and both the operators cannot be used together. No other logical operators are supported. At
     * most three filter fields are allowed in the filter string and if provided more than that then
     * `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `state = ENABLED`
     * - The plugin instance is in enabled state.
     */
    filter?: string;
    /**
     * Optional. The maximum number of hub plugins to return. The service may return fewer than this
     * value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPluginInstances` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListPluginInstances` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsPluginsInstancesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesManageSourceDataRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
    body: GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest;
  };

  export class ApihubProjectsLocationsPluginsInstancesManageSourceDataError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesManageSourceDataError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsInstancesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Resource name segment (instancesId). */
    instancesId: string;
    /** Optional. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1PluginInstance;
  };

  export class ApihubProjectsLocationsPluginsInstancesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsInstancesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of plugins. A filter expression consists of a
     * field name, a comparison operator, and a value for filtering. The value must be a string. The
     * comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The
     * following fields in the `Plugins` are eligible for filtering: * `plugin_category` - The
     * category of the Plugin. Allowed comparison operators: `=`. Expressions are combined with
     * either `AND` logic operator or `OR` logical operator but not both of them together i.e. only
     * one of the `AND` or `OR` operator can be used throughout the filter string and both the
     * operators cannot be used together. No other logical operators are supported. At most three
     * filter fields are allowed in the filter string and if provided more than that then
     * `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `plugin_category
     * = ON_RAMP` - The plugin is of category on ramp.
     */
    filter?: string;
    /**
     * Optional. The maximum number of hub plugins to return. The service may return fewer than this
     * value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000;
     * values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPlugins` call. Provide this to retrieve
     * the subsequent page. When paginating, all other parameters (except page_size) provided to
     * `ListPlugins` must match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsPluginsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsStyleGuideGetContentsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
  };

  export class ApihubProjectsLocationsPluginsStyleGuideGetContentsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsStyleGuideGetContentsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsPluginsUpdateStyleGuideRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (pluginsId). */
    pluginsId: string;
    /** Optional. The list of fields to update. */
    updateMask?: string;
    body: GoogleCloudApihubV1StyleGuide;
  };

  export class ApihubProjectsLocationsPluginsUpdateStyleGuideError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsPluginsUpdateStyleGuideError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsRetrieveApiViewsRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Optional. The filter expression. */
    filter?: string;
    /** Optional. The maximum number of results to return. Default to 100. */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `RetrieveApiViews` call. Provide this to
     * retrieve the subsequent page.
     */
    pageToken?: string;
    /** Required. The view type to return. */
    view?: ViewApigeeProjectsApi;
  };

  export class ApihubProjectsLocationsRetrieveApiViewsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsRetrieveApiViewsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsRuntimeProjectAttachmentsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Required. The ID to use for the Runtime Project Attachment, which will become the final
     * component of the Runtime Project Attachment's name. The ID must be the same as the project ID
     * of the Google cloud project specified in the runtime_project_attachment.runtime_project
     * field.
     */
    runtimeProjectAttachmentId?: string;
    body: GoogleCloudApihubV1RuntimeProjectAttachment;
  };

  export class ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsRuntimeProjectAttachmentsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (runtimeProjectAttachmentsId). */
    runtimeProjectAttachmentsId: string;
  };

  export class ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsRuntimeProjectAttachmentsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsRuntimeProjectAttachmentsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (runtimeProjectAttachmentsId). */
    runtimeProjectAttachmentsId: string;
  };

  export class ApihubProjectsLocationsRuntimeProjectAttachmentsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsRuntimeProjectAttachmentsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsRuntimeProjectAttachmentsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * Optional. An expression that filters the list of RuntimeProjectAttachments. A filter
     * expression consists of a field name, a comparison operator, and a value for filtering. The
     * value must be a string. All standard operators as documented at https://google.aip.dev/160
     * are supported. The following fields in the `RuntimeProjectAttachment` are eligible for
     * filtering: * `name` - The name of the RuntimeProjectAttachment. * `create_time` - The time at
     * which the RuntimeProjectAttachment was created. The value should be in the
     * (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `runtime_project` - The Google cloud
     * project associated with the RuntimeProjectAttachment.
     */
    filter?: string;
    /** Optional. Hint for how to order the results. */
    orderBy?: string;
    /**
     * Optional. The maximum number of runtime project attachments to return. The service may return
     * fewer than this value. If unspecified, at most 50 runtime project attachments will be
     * returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRuntimeProjectAttachments` call.
     * Provide this to retrieve the subsequent page. When paginating, all other parameters (except
     * page_size) provided to `ListRuntimeProjectAttachments` must match the call that provided the
     * page token.
     */
    pageToken?: string;
  };

  export class ApihubProjectsLocationsRuntimeProjectAttachmentsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsRuntimeProjectAttachmentsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsSearchResourcesRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: GoogleCloudApihubV1SearchResourcesRequest;
  };

  export class ApihubProjectsLocationsSearchResourcesError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsSearchResourcesError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type ApihubProjectsLocationsServersConfigureAndDeployServerRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: GoogleCloudApihubV1ConfigureAndDeployServerRequest;
  };

  export class ApihubProjectsLocationsServersConfigureAndDeployServerError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApihubProjectsLocationsServersConfigureAndDeployServerError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
