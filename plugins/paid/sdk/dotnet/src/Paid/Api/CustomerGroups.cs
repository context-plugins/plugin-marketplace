using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.CustomerGroups;

namespace Paid.Api;

public sealed class CustomerGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomerGroups(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new customer group. Names must be unique per org.
    /// </remarks>
    public Task<CustomerGroupDetail> CreateCustomerGroup(CreateCustomerGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerGroupDetail>(),
            CreateCustomerGroupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add members to group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AddMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerGroupMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Additive. Adds customers to the group without removing existing members.
    /// </remarks>
    public Task<AddMembersResponse> CreateCustomerGroupMembers(CreateCustomerGroupMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AddMembersResponse>(),
            CreateCustomerGroupMembersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the group and unbinds all members. Unbound customers fall back to the base value model config.
    /// </remarks>
    public Task<CustomerGroupDeleteResponse> DeleteCustomerGroup(DeleteCustomerGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerGroupDeleteResponse>(),
            DeleteCustomerGroupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove members from group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RemoveMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerGroupMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes specific customers from the group.
    /// </remarks>
    public Task<RemoveMembersResponse> DeleteCustomerGroupMembers(DeleteCustomerGroupMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RemoveMembersResponse>(),
            DeleteCustomerGroupMembersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns group details including member list (capped at 500).
    /// </remarks>
    public Task<CustomerGroupDetail> GetCustomerGroup(GetCustomerGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroupDetail>(),
            GetCustomerGroupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List customer groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCustomerGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all customer groups for the organization.
    /// </remarks>
    public Task<CustomerGroupListResponse> ListCustomerGroups(ListCustomerGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomerGroupListResponse>(),
            ListCustomerGroupsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update customer group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomerGroupDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a customer group's name or description.
    /// </remarks>
    public Task<CustomerGroupDetail> UpdateCustomerGroup(UpdateCustomerGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomerGroupDetail>(),
            UpdateCustomerGroupError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set group members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SetMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerGroupMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reconcile membership. The provided list is the complete desired membership. Customers not in the list are removed. Customers in the list but not currently in the group are added.
    /// </remarks>
    public Task<SetMembersResponse> UpdateCustomerGroupMembers(UpdateCustomerGroupMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/customer-groups/{id}/members"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SetMembersResponse>(),
            UpdateCustomerGroupMembersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
