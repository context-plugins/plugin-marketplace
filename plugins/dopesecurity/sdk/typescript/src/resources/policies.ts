import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorsInternalSchema, type Errors } from "../models/errors.js";
import { Order, orderSchema } from "../models/order.js";
import {
  policiesAssignmentsRequestSchema,
  type PoliciesAssignmentsRequest,
} from "../models/policies-assignments-request.js";
import {
  policiesAssignmentsResponseSchema,
  type PoliciesAssignmentsResponse,
} from "../models/policies-assignments-response.js";
import {
  policiesBypassApplicationsRequestInternalSchema,
  type PoliciesBypassApplicationsRequest,
} from "../models/policies-bypass-applications-request.js";
import {
  policiesBypassApplicationsRequest1Schema,
  type PoliciesBypassApplicationsRequest1,
} from "../models/policies-bypass-applications-request1.js";
import {
  policiesBypassApplicationsResponseInternalSchema,
  type PoliciesBypassApplicationsResponse,
} from "../models/policies-bypass-applications-response.js";
import {
  policiesBypassUrlsRequestInternalSchema,
  type PoliciesBypassUrlsRequest,
} from "../models/policies-bypass-urls-request.js";
import {
  policiesBypassUrlsRequest1Schema,
  type PoliciesBypassUrlsRequest1,
} from "../models/policies-bypass-urls-request1.js";
import {
  policiesBypassUrlsResponseInternalSchema,
  type PoliciesBypassUrlsResponse,
} from "../models/policies-bypass-urls-response.js";
import { policiesResponseSchema, type PoliciesResponse } from "../models/policies-response.js";
import {
  policiesSslInspectionRequestSchema,
  type PoliciesSslInspectionRequest,
} from "../models/policies-ssl-inspection-request.js";
import {
  policiesSslInspectionResponseSchema,
  type PoliciesSslInspectionResponse,
} from "../models/policies-ssl-inspection-response.js";
import {
  policyContentExceptionsRequestSchema,
  type PolicyContentExceptionsRequest,
} from "../models/policy-content-exceptions-request.js";
import {
  policyContentResponseSchema,
  type PolicyContentResponse,
} from "../models/policy-content-response.js";
import {
  policyContentRestrictionsRequestSchema,
  type PolicyContentRestrictionsRequest,
} from "../models/policy-content-restrictions-request.js";
import { successMessageSchema, type SuccessMessage } from "../models/success-message.js";
import type { Servers } from "../servers.js";

/**
 * Everything about your Policies
 */
export class Policies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Policy
   *
   * @remarks
   * Use this API to create a new policy.
   *
   * Specify the name of the policy in the path parameter (`policy_name`).
   *
   * If the policy already exists, a `400` error is returned.
   *
   * Validation rules for `policy_name`:
   * - Must not be empty or whitespace-only
   * - Must not contain leading or trailing whitespace
   * - Maximum length of 32 characters
   * - Must not contain any of the following characters: `# ! \@ $ % ^ * ? . / \`
   *
   * @returns OK
   *
   * @throws {@link Policies.CreatePolicyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPolicy(
    request: Policies.CreatePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.CreatePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/policies/{policy_name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.CreatePolicyError,
      },
      options,
    );
  }

  /**
   * Delete Custom Application Bypass Entries
   *
   * @remarks
   * Use this API to delete custom application bypass entries from a policy by name.
   *
   * The operation is idempotent — names that do not exist are silently ignored.
   *
   * At least one of `mac` or `windows` must be provided.
   *
   * Policies that inherit application bypass from the Base Policy cannot have custom applications
   * deleted.
   *
   * @returns OK
   *
   * @throws {@link Policies.DeleteCustomApplicationBypassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomApplicationBypass(
    request: Policies.DeleteCustomApplicationBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.DeleteCustomApplicationBypassError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/applications"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesBypassApplicationsRequest1Schema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.DeleteCustomApplicationBypassError,
      },
      options,
    );
  }

  /**
   * Delete Custom URL Bypass Entries
   *
   * @remarks
   * Use this API to delete custom URL bypass entries from a policy by name.
   *
   * The operation is idempotent — names that do not exist are silently ignored.
   *
   * Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.
   *
   * @returns OK
   *
   * @throws {@link Policies.DeleteCustomUrlBypassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomUrlBypass(
    request: Policies.DeleteCustomUrlBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.DeleteCustomUrlBypassError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesBypassUrlsRequest1Schema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.DeleteCustomUrlBypassError,
      },
      options,
    );
  }

  /**
   * Delete a Policy
   *
   * @remarks
   * Use this API to delete a custom policy by name. This removes the policy and unassigns all users
   * and groups from the policy.
   *
   * The Base Policy cannot be deleted.
   *
   * @returns OK
   *
   * @throws {@link Policies.DeletePolicyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePolicy(
    request: Policies.DeletePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.DeletePolicyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/policies/{policy_name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.DeletePolicyError,
      },
      options,
    );
  }

  /**
   * Get Application Bypass
   *
   * @remarks
   * Use this API to get the application bypass entries for a policy.
   *
   * The response contains both admin-defined `custom` entries and dope-provided `default` entries
   * with their per-entry toggle state, split per platform (`mac` and `windows`).
   *
   * When a policy inherits from the base policy, `inheritsFromBase` will be `true` and the `custom`
   * and `default` entries will reflect the base policy's settings.
   *
   * @returns OK
   *
   * @throws {@link Policies.GetApplicationBypassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApplicationBypass(
    request: Policies.GetApplicationBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<PoliciesBypassApplicationsResponse, Policies.GetApplicationBypassError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/applications"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policiesBypassApplicationsResponseInternalSchema },
        errorFactory: Policies.GetApplicationBypassError,
      },
      options,
    );
  }

  /**
   * Get Policy Assignments
   *
   * @remarks
   * Use this API to get the users and groups assigned to a policy.
   *
   * @returns OK
   *
   * @throws {@link Policies.GetPolicyAssignmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPolicyAssignments(
    request: Policies.GetPolicyAssignmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PoliciesAssignmentsResponse, Policies.GetPolicyAssignmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies/{policy_name}/assignments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policiesAssignmentsResponseSchema },
        errorFactory: Policies.GetPolicyAssignmentsError,
      },
      options,
    );
  }

  /**
   * Get Policy Content
   *
   * @remarks
   * Use this API to retrieve the entire content of a policy, including categories and custom
   * categories.
   *
   * When a policy inherits from the base policy, `inheritsFromBase` will be `true` and the content
   * will reflect the base policy's settings.
   *
   * @returns OK
   *
   * @throws {@link Policies.GetPolicyContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPolicyContent(
    request: Policies.GetPolicyContentRequest,
    options?: RequestOptions,
  ): ApiPromise<PolicyContentResponse, Policies.GetPolicyContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies/{policy_name}/content"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policyContentResponseSchema },
        errorFactory: Policies.GetPolicyContentError,
      },
      options,
    );
  }

  /**
   * Get SSL Inspection Configuration
   *
   * @remarks
   * Use this API to get the SSL inspection configuration for a policy.
   *
   * The response returns `sslInspection` as an object containing the resolved `state` (always
   * `enabled` or `disabled`) and `inheritsFromBase` indicating whether the policy inherits SSL
   * inspection from the Base Policy.
   *
   * @returns OK
   *
   * @throws {@link Policies.GetSslInspectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSslInspection(
    request: Policies.GetSslInspectionRequest,
    options?: RequestOptions,
  ): ApiPromise<PoliciesSslInspectionResponse, Policies.GetSslInspectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies/{policy_name}/ssl-inspection"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policiesSslInspectionResponseSchema },
        errorFactory: Policies.GetSslInspectionError,
      },
      options,
    );
  }

  /**
   * Get URL Bypass
   *
   * @remarks
   * Use this API to get the URL bypass entries for a policy.
   *
   * The response contains both admin-defined `custom` entries and dope-provided `default` entries
   * with their per-entry toggle state.
   *
   * When a policy inherits from the base policy, `inheritsFromBase` will be `true` and the `custom`
   * and `default` entries will reflect the base policy's settings.
   *
   * @returns OK
   *
   * @throws {@link Policies.GetUrlBypassError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUrlBypass(
    request: Policies.GetUrlBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<PoliciesBypassUrlsResponse, Policies.GetUrlBypassError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policiesBypassUrlsResponseInternalSchema },
        errorFactory: Policies.GetUrlBypassError,
      },
      options,
    );
  }

  /**
   * List Policies
   *
   * @remarks
   * Use this API to get a paginated list of all your policies, ordered by policy name.
   *
   * Each item includes the policy name, last-modified timestamp, SSL inspection status, and the
   * number of conflicting assignments.
   *
   * The `sslInspection` field returns the effective value (`enabled` or `disabled`). If SSL
   * inspection is not explicitly configured on a policy, the value is inherited from the Base
   * Policy.
   *
   * Results are returned in pages using cursor-based pagination.
   *
   * @returns OK
   *
   * @throws {@link Policies.ListPoliciesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPolicies(
    request: Policies.ListPoliciesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PoliciesResponse, Policies.ListPoliciesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/policies"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "first", value: request.first, schema: s.defaulted(s.int(), 50) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Asc) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: policiesResponseSchema },
        errorFactory: Policies.ListPoliciesError,
      },
      options,
    );
  }

  /**
   * Update Policy Assignments
   *
   * @remarks
   * Use this API to update the users and groups assigned to a policy.
   *
   * Each provided field fully replaces that assignment list. Omitted fields are preserved. Send an
   * empty array to unassign all users or groups.
   *
   * @returns OK
   *
   * @throws {@link Policies.UpdatePolicyAssignmentsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePolicyAssignments(
    request: Policies.UpdatePolicyAssignmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpdatePolicyAssignmentsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/assignments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesAssignmentsRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpdatePolicyAssignmentsError,
      },
      options,
    );
  }

  /**
   * Update Policy Content Exceptions
   *
   * @remarks
   * Use this API to update user/group-level exceptions on dope and custom categories for a policy.
   *
   * Exceptions are per-user/group overrides of a category's restriction. Each exception is keyed by
   * the user or group identifier (e.g. email address) within a category.
   *
   * A single request can update exceptions across multiple dope and custom categories. Categories
   * not included in the request remain unchanged. For each category provided, the submitted
   * exception set is treated as the complete source of truth and fully replaces any existing
   * exceptions. Any existing entries not included in the request for that category will be removed.
   * To remove all exceptions from a category, pass an empty object `{}` as its value.
   *
   * All user and group identifiers are validated against the tenant directory. If any identifier
   * cannot be resolved, the request fails with a `400 Bad Request`, and the response includes
   * details of the invalid entries.
   *
   * @returns OK
   *
   * @throws {@link Policies.UpdatePolicyExceptionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePolicyExceptions(
    request: Policies.UpdatePolicyExceptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpdatePolicyExceptionsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/content/exceptions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policyContentExceptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpdatePolicyExceptionsError,
      },
      options,
    );
  }

  /**
   * Update Policy Content Restrictions
   *
   * @remarks
   * Use this API to update restrictions on dope and custom categories for a policy.
   *
   * A single call may update restrictions on any combination of dope and custom categories. Only
   * submitted categories will be updated - any category not included in the request will be left
   * unchanged.
   *
   * This API also resets categories back to inheriting from base. Both dope categories and custom
   * categories inherit from base (and are reset) as a whole by sending `{inheritsFromBase:true}` in
   * the payload.
   *
   * @returns OK
   *
   * @throws {@link Policies.UpdatePolicyRestrictionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePolicyRestrictions(
    request: Policies.UpdatePolicyRestrictionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpdatePolicyRestrictionsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/content/restrictions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policyContentRestrictionsRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpdatePolicyRestrictionsError,
      },
      options,
    );
  }

  /**
   * Update SSL Inspection Configuration
   *
   * @remarks
   * Use this API to update the SSL inspection configuration for a policy.
   *
   * The request body must be either:
   * - `{"state": "enabled" | "disabled"}` to set a custom state on this policy, OR
   * - `{"inheritsFromBase": true}` to make this policy inherit SSL inspection from the Base Policy.
   *
   * Exactly one of these two shapes is allowed. Anything else (extra fields, both fields,
   * `inheritsFromBase: false`) returns `400`. The Base Policy cannot inherit from itself; setting
   * `inheritsFromBase: true` on the Base Policy returns `400`.
   *
   * @returns SSL inspection updated successfully
   *
   * @throws {@link Policies.UpdateSslInspectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSslInspection(
    request: Policies.UpdateSslInspectionRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpdateSslInspectionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/ssl-inspection"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesSslInspectionRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpdateSslInspectionError,
      },
      options,
    );
  }

  /**
   * Upsert Application Bypass
   *
   * @remarks
   * Upsert custom application bypass entries and/or update default application bypass states for a
   * policy.
   *
   * **Custom entries** are matched by name: matching names are overwritten, unknown names are
   * added. Unmentioned custom entries are preserved.
   *
   * **Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
   * or `applied` to re-enable it. Unknown default entry names are silently ignored.
   *
   * Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit all
   * application bypass configuration from the base policy (this drops all custom entries and
   * default overrides for this policy).
   *
   * **Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
   * sending `custom` or `default` entries will detach it. Base entries are not copied — include any
   * you want to keep in the request. Once detached, further Base Policy changes will no longer
   * propagate to this policy.
   *
   * @returns Application bypass updated successfully
   *
   * @throws {@link Policies.UpsertApplicationBypassError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertApplicationBypass(
    request: Policies.UpsertApplicationBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpsertApplicationBypassError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/applications"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesBypassApplicationsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpsertApplicationBypassError,
      },
      options,
    );
  }

  /**
   * Upsert URL Bypass
   *
   * @remarks
   * Upsert custom URL bypass entries and/or update default URL bypass states for a policy.
   *
   * **Custom entries** are matched by name: matching names are overwritten, unknown names are
   * added. Unmentioned custom entries are preserved.
   *
   * **Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
   * or `applied` to re-enable it. Unknown default entry names are silently ignored.
   *
   * Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit all
   * URL bypass configuration from the base policy (this drops all custom entries and default
   * overrides for this policy).
   *
   * **Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
   * sending `custom` or `default` entries will detach it. Base entries are not copied — include any
   * you want to keep in the request. Once detached, further Base Policy changes will no longer
   * propagate to this policy.
   *
   * @returns URL bypass updated successfully
   *
   * @throws {@link Policies.UpsertUrlBypassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertUrlBypass(
    request: Policies.UpsertUrlBypassRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, Policies.UpsertUrlBypassError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/policies/{policy_name}/bypass/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "policy_name", value: request.policyName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: policiesBypassUrlsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: Policies.UpsertUrlBypassError,
      },
      options,
    );
  }
}

export namespace Policies {
  export type CreatePolicyRequest = {
    /** The name of the policy to create */
    policyName: string;
  };

  export const createPolicyRequestSchema: Schema<CreatePolicyRequest> = s.lazySchema(() =>
    s.object<CreatePolicyRequest>({
      policyName: s.string().check(s.minLength(1), s.maxLength(32), s.pattern("^[^#!@$%^*?./\\\\]+$")),
    }),
  );

  export class CreatePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePolicyError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeleteCustomApplicationBypassRequest = {
    /** The name of the policy to delete application bypass entries from */
    policyName: string;
    body: PoliciesBypassApplicationsRequest1;
  };

  export class DeleteCustomApplicationBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomApplicationBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeleteCustomUrlBypassRequest = {
    /** The name of the policy to delete URL bypass entries from */
    policyName: string;
    body: PoliciesBypassUrlsRequest1;
  };

  export class DeleteCustomUrlBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomUrlBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeletePolicyRequest = {
    /** The name of the policy to delete */
    policyName: string;
  };

  export class DeletePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePolicyError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type GetApplicationBypassRequest = {
    /** The name of the policy to retrieve the application bypass for */
    policyName: string;
  };

  export class GetApplicationBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApplicationBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type GetPolicyAssignmentsRequest = {
    /** The name of the policy to get assignments for */
    policyName: string;
  };

  export class GetPolicyAssignmentsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPolicyAssignmentsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type GetPolicyContentRequest = {
    /** The name of the policy to retrieve content for */
    policyName: string;
  };

  export class GetPolicyContentError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPolicyContentError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type GetSslInspectionRequest = {
    /** The name of the policy to retrieve SSL inspection for */
    policyName: string;
  };

  export class GetSslInspectionError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSslInspectionError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type GetUrlBypassRequest = {
    /** The name of the policy to retrieve the URL bypass for */
    policyName: string;
  };

  export class GetUrlBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUrlBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type ListPoliciesRequest = {
    /**
     * An optional pagination param that states the number of records requested from the **start**
     * of the `cursor`. The default value is **50**.
     *
     * @default 50
     */
    first?: number;
    /**
     * An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo`
     * to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to
     * determine whether more records are available.
     */
    after?: string;
    /** Sort order for policy names. Defaults to `asc`. @default Order.Asc */
    order?: Order;
  };

  export class ListPoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPoliciesError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpdatePolicyAssignmentsRequest = {
    /** The name of the policy to update assignments for */
    policyName: string;
    body: PoliciesAssignmentsRequest;
  };

  export class UpdatePolicyAssignmentsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePolicyAssignmentsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpdatePolicyExceptionsRequest = {
    /** The name of the policy to update exceptions for */
    policyName: string;
    body: PolicyContentExceptionsRequest;
  };

  export class UpdatePolicyExceptionsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePolicyExceptionsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpdatePolicyRestrictionsRequest = {
    /** The name of the policy to update restrictions for */
    policyName: string;
    body: PolicyContentRestrictionsRequest;
  };

  export class UpdatePolicyRestrictionsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePolicyRestrictionsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpdateSslInspectionRequest = {
    /** The name of the policy to update SSL inspection for */
    policyName: string;
    body: PoliciesSslInspectionRequest;
  };

  export class UpdateSslInspectionError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSslInspectionError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpsertApplicationBypassRequest = {
    /** The name of the policy to update application bypass entries for */
    policyName: string;
    body: PoliciesBypassApplicationsRequest;
  };

  export class UpsertApplicationBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpsertApplicationBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 401, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type UpsertUrlBypassRequest = {
    /** The name of the policy to update URL bypass entries for */
    policyName: string;
    body: PoliciesBypassUrlsRequest;
  };

  export class UpsertUrlBypassError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpsertUrlBypassError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 401, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }
}
