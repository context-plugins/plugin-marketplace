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
using DoiT.Requests.ContractTemplates;

namespace DoiT.Api;

/// <summary>
/// Manage contract templates for PartnerOps resellers (T1/T2).
/// </summary>
public sealed class ContractTemplates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContractTemplates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Archive contract template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveContractTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer token). Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<ContractTemplateResponse> ArchiveContractTemplate(ArchiveContractTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates/{templateID}"),
            [new TemplateParam("templateID", request.TemplateId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ContractTemplateResponse>(),
            ArchiveContractTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Assign contract template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssignContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssignContractTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Applies a contract template owned by the authenticated tenant (from the bearer token) to child customers, creating a draft contract for each. Drafts have no billing effect until each one is completed and activated. The template must not be archived, and the current date must fall within its eligibility window. Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<AssignContractTemplateResponse> AssignContractTemplate(AssignContractTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates/{templateID}/actions/assign"),
            [new TemplateParam("templateID", request.TemplateId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AssignContractTemplateResponse>(),
            AssignContractTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create contract template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContractTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a contract template for the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<ContractTemplateResponse> CreateContractTemplate(CreateContractTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContractTemplateResponse>(),
            CreateContractTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get contract template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContractTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<ContractTemplateResponse> GetContractTemplate(GetContractTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates/{templateID}"),
            [new TemplateParam("templateID", request.TemplateId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContractTemplateResponse>(),
            GetContractTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contract templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContractTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists contract templates owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<IReadOnlyList<ContractTemplateResponse>> ListContractTemplates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ContractTemplateResponse>>(),
            ListContractTemplatesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update contract template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContractTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContractTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a contract template owned by the authenticated tenant (from the bearer token). Requires ContractTemplatesAdmin, DoiT API access (<c>platform:externalApi</c>), and the <c>channelops:contracts:templates</c> entitlement.
    /// </remarks>
    public Task<ContractTemplateResponse> UpdateContractTemplate(UpdateContractTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billing/v1/contract-templates/{templateID}"),
            [new TemplateParam("templateID", request.TemplateId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContractTemplateResponse>(),
            UpdateContractTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
