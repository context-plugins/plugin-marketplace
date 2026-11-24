using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DopeSecurity.Core;
using DopeSecurity.Core.Exceptions;
using DopeSecurity.Core.Models;
using DopeSecurity.Core.Request;
using DopeSecurity.Core.Response;
using DopeSecurity.Errors;
using DopeSecurity.Models;
using DopeSecurity.Requests.Policies;

namespace DopeSecurity.Api;

/// <summary>
/// Everything about your Policies
/// </summary>
public sealed class Policies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Policies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to create a new policy.
    /// <para>
    /// Specify the name of the policy in the path parameter (<c>policy_name</c>).
    /// </para>
    /// <para>
    /// If the policy already exists, a <c>400</c> error is returned.
    /// </para>
    /// <para>
    /// Validation rules for <c>policy_name</c>:
    /// - Must not be empty or whitespace-only
    /// - Must not contain leading or trailing whitespace
    /// - Maximum length of 32 characters
    /// - Must not contain any of the following characters: <c># ! @ $ % ^ * ? . / \</c>
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> CreatePolicy(CreatePolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            CreatePolicyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Custom Application Bypass Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomApplicationBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete custom application bypass entries from a policy by name.
    /// <para>
    /// The operation is idempotent — names that do not exist are silently ignored.
    /// </para>
    /// <para>
    /// At least one of <c>mac</c> or <c>windows</c> must be provided.
    /// </para>
    /// <para>
    /// Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> DeleteCustomApplicationBypass(DeleteCustomApplicationBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/applications"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            DeleteCustomApplicationBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Custom URL Bypass Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomUrlBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete custom URL bypass entries from a policy by name.
    /// <para>
    /// The operation is idempotent — names that do not exist are silently ignored.
    /// </para>
    /// <para>
    /// Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> DeleteCustomUrlBypass(DeleteCustomUrlBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/urls"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            DeleteCustomUrlBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Policy
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to delete a custom policy by name.
    /// This removes the policy and unassigns all users and groups from the policy.
    /// <para>
    /// The Base Policy cannot be deleted.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> DeletePolicy(DeletePolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessMessage>(),
            DeletePolicyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Application Bypass
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PoliciesBypassApplicationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApplicationBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get the application bypass entries for a policy.
    /// <para>
    /// The response contains both admin-defined <c>custom</c> entries and dope-provided
    /// <c>default</c> entries with their per-entry toggle state, split per platform
    /// (<c>mac</c> and <c>windows</c>).
    /// </para>
    /// <para>
    /// When a policy inherits from the base policy, <c>inheritsFromBase</c> will be <c>true</c>
    /// and the <c>custom</c> and <c>default</c> entries will reflect the base policy's settings.
    /// </para>
    /// </remarks>
    public Task<PoliciesBypassApplicationsResponse> GetApplicationBypass(GetApplicationBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/applications"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PoliciesBypassApplicationsResponse>(),
            GetApplicationBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Policy Assignments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PoliciesAssignmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPolicyAssignmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get the users and groups assigned to a policy.
    /// </remarks>
    public Task<PoliciesAssignmentsResponse> GetPolicyAssignments(GetPolicyAssignmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/assignments"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PoliciesAssignmentsResponse>(),
            GetPolicyAssignmentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Policy Content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PolicyContentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPolicyContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to retrieve the entire content of a policy, including
    /// categories and custom categories.
    /// <para>
    /// When a policy inherits from the base policy, <c>inheritsFromBase</c> will be <c>true</c>
    /// and the content will reflect the base policy's settings.
    /// </para>
    /// </remarks>
    public Task<PolicyContentResponse> GetPolicyContent(GetPolicyContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/content"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PolicyContentResponse>(),
            GetPolicyContentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get SSL Inspection Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PoliciesSslInspectionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSslInspectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get the SSL inspection configuration for a policy.
    /// <para>
    /// The response returns <c>sslInspection</c> as an object containing the resolved
    /// <c>state</c> (always <c>enabled</c> or <c>disabled</c>) and <c>inheritsFromBase</c> indicating
    /// whether the policy inherits SSL inspection from the Base Policy.
    /// </para>
    /// </remarks>
    public Task<PoliciesSslInspectionResponse> GetSslInspection(GetSslInspectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/ssl-inspection"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PoliciesSslInspectionResponse>(),
            GetSslInspectionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get URL Bypass
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PoliciesBypassUrlsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUrlBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get the URL bypass entries for a policy.
    /// <para>
    /// The response contains both admin-defined <c>custom</c> entries and dope-provided
    /// <c>default</c> entries with their per-entry toggle state.
    /// </para>
    /// <para>
    /// When a policy inherits from the base policy, <c>inheritsFromBase</c> will be <c>true</c>
    /// and the <c>custom</c> and <c>default</c> entries will reflect the base policy's settings.
    /// </para>
    /// </remarks>
    public Task<PoliciesBypassUrlsResponse> GetUrlBypass(GetUrlBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/urls"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PoliciesBypassUrlsResponse>(),
            GetUrlBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Policies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PoliciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPoliciesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get a paginated list of all your policies, ordered by policy name.
    /// <para>
    /// Each item includes the policy name, last-modified timestamp, SSL inspection status, and
    /// the number of conflicting assignments.
    /// </para>
    /// <para>
    /// The <c>sslInspection</c> field returns the effective value (<c>enabled</c> or <c>disabled</c>). If SSL
    /// inspection is not explicitly configured on a policy, the value is inherited from the Base Policy.
    /// </para>
    /// <para>
    /// Results are returned in pages using cursor-based pagination.
    /// </para>
    /// </remarks>
    public Task<PoliciesResponse> ListPolicies(ListPoliciesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies"),
            [],
            [new Param("first", request.First), new Param("after", request.After), new Param("order", request.Order)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PoliciesResponse>(),
            ListPoliciesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Policy Assignments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePolicyAssignmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to update the users and groups assigned to a policy.
    /// <para>
    /// Each provided field fully replaces that assignment list. Omitted fields are preserved.
    /// Send an empty array to unassign all users or groups.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpdatePolicyAssignments(UpdatePolicyAssignmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/assignments"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpdatePolicyAssignmentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Policy Content Exceptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePolicyExceptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to update user/group-level exceptions on dope and custom categories for a policy.
    /// <para>
    /// Exceptions are per-user/group overrides of a category's restriction.
    /// Each exception is keyed by the user or group identifier (e.g. email address) within a category.
    /// </para>
    /// <para>
    /// A single request can update exceptions across multiple dope and custom categories.
    /// Categories not included in the request remain unchanged. For each category provided, the submitted
    /// exception set is treated as the complete source of truth and fully replaces any existing exceptions.
    /// Any existing entries not included in the request for that category will be removed.
    /// To remove all exceptions from a category, pass an empty object <c>{}</c> as its value.
    /// </para>
    /// <para>
    /// All user and group identifiers are validated against the tenant directory.
    /// If any identifier cannot be resolved, the request fails with a <c>400 Bad Request</c>,
    /// and the response includes details of the invalid entries.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpdatePolicyExceptions(UpdatePolicyExceptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/content/exceptions"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpdatePolicyExceptionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Policy Content Restrictions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePolicyRestrictionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to update restrictions on dope and custom categories for a policy.
    /// <para>
    /// A single call may update restrictions on any combination of dope
    /// and custom categories. Only submitted categories will be updated -
    /// any category not included in the request will be left unchanged.
    /// </para>
    /// <para>
    /// This API also resets categories back to inheriting from base.
    /// Both dope categories and custom categories inherit from base
    /// (and are reset) as a whole by sending <c>{inheritsFromBase:true}</c> in the payload.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpdatePolicyRestrictions(UpdatePolicyRestrictionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/content/restrictions"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpdatePolicyRestrictionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SSL Inspection Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSslInspectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to update the SSL inspection configuration for a policy.
    /// <para>
    /// The request body must be either:
    /// - <c>{"state": "enabled" | "disabled"}</c> to set a custom state on this policy, OR
    /// - <c>{"inheritsFromBase": true}</c> to make this policy inherit SSL inspection from the Base Policy.
    /// </para>
    /// <para>
    /// Exactly one of these two shapes is allowed. Anything else (extra fields,
    /// both fields, <c>inheritsFromBase: false</c>) returns <c>400</c>. The Base Policy
    /// cannot inherit from itself; setting <c>inheritsFromBase: true</c> on the Base
    /// Policy returns <c>400</c>.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpdateSslInspection(UpdateSslInspectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/ssl-inspection"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpdateSslInspectionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upsert Application Bypass
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertApplicationBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upsert custom application bypass entries and/or update default application bypass states for a policy.
    /// <para>
    /// <b>Custom entries</b> are matched by name: matching names are overwritten, unknown names are added.
    /// Unmentioned custom entries are preserved.
    /// </para>
    /// <para>
    /// <b>Default entries</b> are matched by name: set <c>state</c> to <c>ignored</c> to suppress a default entry,
    /// or <c>applied</c> to re-enable it. Unknown default entry names are silently ignored.
    /// </para>
    /// <para>
    /// Pass <c>inheritsFromBase: true</c> as the entire <c>data</c> payload to reset the policy to inherit
    /// all application bypass configuration from the base policy (this drops all custom entries and default
    /// overrides for this policy).
    /// </para>
    /// <para>
    /// <b>Detaching from Base</b>: If a policy inherits from the Base Policy (<c>inheritsFromBase: true</c>),
    /// sending <c>custom</c> or <c>default</c> entries will detach it. Base entries are not copied — include any
    /// you want to keep in the request. Once detached, further Base Policy changes will no longer
    /// propagate to this policy.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpsertApplicationBypass(UpsertApplicationBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/applications"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpsertApplicationBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upsert URL Bypass
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertUrlBypassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upsert custom URL bypass entries and/or update default URL bypass states for a policy.
    /// <para>
    /// <b>Custom entries</b> are matched by name: matching names are overwritten, unknown names are added.
    /// Unmentioned custom entries are preserved.
    /// </para>
    /// <para>
    /// <b>Default entries</b> are matched by name: set <c>state</c> to <c>ignored</c> to suppress a default entry,
    /// or <c>applied</c> to re-enable it. Unknown default entry names are silently ignored.
    /// </para>
    /// <para>
    /// Pass <c>inheritsFromBase: true</c> as the entire <c>data</c> payload to reset the policy to inherit
    /// all URL bypass configuration from the base policy (this drops all custom entries and default
    /// overrides for this policy).
    /// </para>
    /// <para>
    /// <b>Detaching from Base</b>: If a policy inherits from the Base Policy (<c>inheritsFromBase: true</c>),
    /// sending <c>custom</c> or <c>default</c> entries will detach it. Base entries are not copied — include any
    /// you want to keep in the request. Once detached, further Base Policy changes will no longer
    /// propagate to this policy.
    /// </para>
    /// </remarks>
    public Task<SuccessMessage> UpsertUrlBypass(UpsertUrlBypassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/policies/{policy_name}/bypass/urls"),
            [new TemplateParam("policy_name", request.PolicyName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessMessage>(),
            UpsertUrlBypassError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
