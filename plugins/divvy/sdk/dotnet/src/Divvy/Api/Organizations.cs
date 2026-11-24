using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Organizations;

namespace Divvy.Api;

public sealed class Organizations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Organizations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get billing statement details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BillingStatementDetailResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingStatementDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a billing statement for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download a billing statement.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
    /// </code>
    /// </remarks>
    public Task<BillingStatementDetailResponseDto> GetBillingStatementDetail(GetBillingStatementDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/billing-statements/{billingStatementId}"),
            [
                new TemplateParam("organizationId", request.OrganizationId),
                new TemplateParam("billingStatementId", request.BillingStatementId),
            ],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BillingStatementDetailResponseDto>(),
            GetBillingStatementDetailError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing organization. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation.
    /// <para>
    /// See Organizations and Users in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationResponseDto> GetOrganization(GetOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationResponseDto>(),
            GetOrganizationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization price plan details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PricePlanResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPricePlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the BILL price plan details for an existing organization. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation.
    /// <para>
    /// A BILL price plan for an organization provides a range of information, including monthly subscription fees and the terms and conditions for additional charges in the price plan.
    /// </para>
    /// <para>
    /// In the response, the <c>planTerms</c> object includes information about charges for price plan features based on a combination of charge <c>tier</c>, <c>quantity</c>, and <c>price</c>. We explain plan terms with an example.
    /// * If <c>"tier": 1</c>, <c>"quantity": 5</c>, and <c>"price": 10</c>, the first 5 users will be charged $10 each.
    /// * If <c>"tier": 2</c>, <c>"quantity": 10</c>, and <c>"price": 8</c>, the next 10 users will be charged $8 each. At this level, if there is no <c>tier</c> information, all users after tier 1 will be charged $8 each.
    /// </para>
    /// </remarks>
    public Task<PricePlanResponseDto> GetPricePlan(GetPricePlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/price-plan"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PricePlanResponseDto>(),
            GetPricePlanError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of billing statements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoBillingStatementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingStatementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.
    /// <para>
    /// In the request, set <c>invoiceDateFrom</c> and <c>invoiceDateTo</c> to get the billing invoice statements for the specified date range.
    /// </para>
    /// <para>
    /// You can set <c>max</c> and <c>page</c> in the request only when both <c>invoiceDateFrom</c> and <c>invoiceDateTo</c> are not set. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </para>
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoBillingStatementResponseDto> ListBillingStatements(ListBillingStatementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}/billing-statements"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [
                new Param("max", request.Max),
                new Param("invoiceDateFrom", request.InvoiceDateFrom),
                new Param("invoiceDateTo", request.InvoiceDateTo),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoBillingStatementResponseDto>(),
            ListBillingStatementsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of organization industries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIndustriesResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIndustriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of available values for the <c>industry</c> field for an organization. Use this information to set the <c>industry</c> field in your <c>POST /v3/partner/organizations</c> or <c>PATCH /v3/organizations/{organizationId}</c> request.
    /// </remarks>
    public Task<ListIndustriesResponseDto> ListIndustries(ListIndustriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/industries"),
            [],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListIndustriesResponseDto>(),
            ListIndustriesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing organization. The currently signed-in user must have the <c>ADMINISTRATOR</c> user role in the BILL organization to perform this operation.
    /// <para>
    /// See Organizations and Users in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationResponseDto> UpdateOrganization(UpdateOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/organizations/{organizationId}"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationResponseDto>(),
            UpdateOrganizationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
