using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Contracts;

namespace DoiT.Api;

/// <summary>
/// List and manage tenant-scoped contracts as a T1/T2 PartnerOps caller.
/// </summary>
public sealed class Contracts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Contracts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Activate contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractLifecycleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transitions a draft contract to active or scheduled (when the start date is in the future). Produces the same system state as activating via the Console.
    /// </remarks>
    public Task<ContractLifecycleResponse> ActivateContract(ActivateContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts/{contractID}/activate"),
            [new TemplateParam("customerID", request.CustomerId), new TemplateParam("contractID", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ContractLifecycleResponse>(),
            ActivateContractError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractLifecycleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal operation.
    /// </remarks>
    public Task<ContractLifecycleResponse> CancelContract(CancelContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts/{contractID}/cancel"),
            [new TemplateParam("customerID", request.CustomerId), new TemplateParam("contractID", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContractLifecycleResponse>(),
            CancelContractError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a draft contract for the specified customer. Requires the caller to be the direct parent (T1 for a T2-level contract, T2 for a T3-level contract). Write access requires a role without contractsReadOnly; user API tokens must include the matching permission in their scope.
    /// </remarks>
    public Task<CreateContractResponse> CreateContract(CreateContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts"),
            [new TemplateParam("customerID", request.CustomerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateContractResponse>(),
            CreateContractError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MtsContractDetailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified contract.
    /// </remarks>
    public Task<MtsContractDetailResponse> GetContract(GetContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts/{contractID}"),
            [new TemplateParam("customerID", request.CustomerId), new TemplateParam("contractID", request.ContractId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MtsContractDetailResponse>(),
            GetContractError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="MtsContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal for its own tenant or any descendant tenant. Read access requires contractsReadOnly, contractsViewer, or a write-capable role (without contractsReadOnly). User API tokens must include the matching permission in their scope.
    /// </remarks>
    public Task<IReadOnlyList<MtsContractResponse>> ListContracts(ListContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts"),
            [new TemplateParam("customerID", request.CustomerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<MtsContractResponse>>(),
            ListContractsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContractError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new version of the contract. The contract type is immutable and cannot be changed by an update.
    /// </remarks>
    public Task<CreateContractResponse> UpdateContract(UpdateContractRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/{customerID}/contracts/{contractID}"),
            [new TemplateParam("customerID", request.CustomerId), new TemplateParam("contractID", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateContractResponse>(),
            UpdateContractError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
