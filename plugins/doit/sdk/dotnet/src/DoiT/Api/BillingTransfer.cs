using System;
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
using DoiT.Requests.BillingTransfer;

namespace DoiT.Api;

/// <summary>
/// Manage AWS billing-transfer mappings between distributors and resellers and between resellers and end customers, and list program management accounts.
/// </summary>
public sealed class BillingTransfer
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BillingTransfer(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create end-customer mappings (batch)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EndCustomerMappingBatchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillingTransferEndCustomerMappingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS
    /// billing transfer onboarding. Reseller-only; distributors are explicitly denied (<c>403</c>).
    /// <para>
    /// Unlike <c>POST /billingtransfer/v1/resellerhandshakes</c>, this endpoint has no
    /// <c>Idempotency-Key</c> requirement and no <c>dryRun</c> support.
    /// </para>
    /// <para>
    /// This path is a deliberate exception to the de-hyphenation convention used by the sibling
    /// <c>resellerhandshakes</c> and <c>programmanagementaccounts</c> paths — it stays hyphenated to match
    /// the existing Go route and its console-facing equivalent.
    /// </para>
    /// <para>
    /// Each item in the batch is processed independently; per-item outcomes are returned in
    /// <c>results[]</c> with HTTP <c>200</c>. Malformed items are rejected up front and reported in
    /// <c>invalidItems</c> without processing any of the batch.
    /// </para>
    /// </remarks>
    public Task<EndCustomerMappingBatchResult> CreateBillingTransferEndCustomerMappings(CreateBillingTransferEndCustomerMappingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/end-customer-mappings"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EndCustomerMappingBatchResult>(),
            CreateBillingTransferEndCustomerMappingsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create reseller handshakes (batch)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResellerHandshakeBatchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillingTransferResellerHandshakesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Maps reseller to distributor; also sends the handshake if required, as part of AWS
    /// billing transfer onboarding. Distributor-only; callers without the ChannelOps distributor
    /// tier entitlement receive <c>403</c>.
    /// <para>
    /// Each item in the batch is processed independently; per-item outcomes are returned in
    /// <c>results[]</c> with HTTP <c>200</c> even when some items fail. Malformed items (missing fields,
    /// duplicate <c>resellerPmaAccountId</c> within the batch) are rejected up front with <c>422</c> and
    /// reported in <c>invalidItems</c>, and none of the batch is processed in that case.
    /// </para>
    /// </remarks>
    public Task<ResellerHandshakeBatchResult> CreateBillingTransferResellerHandshakes(CreateBillingTransferResellerHandshakesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/resellerhandshakes"),
            [],
            [new Param("dryRun", request.DryRun)],
            [
                new HeaderParam("Idempotency-Key", request.IdempotencyKey),
                new HeaderParam("X-Tenant-Id", request.XTenantId),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResellerHandshakeBatchResult>(),
            CreateBillingTransferResellerHandshakesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get program management account status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProgramManagementAccountsStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBillingTransferProgramManagementAccountsStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs
    /// with only its IAM status/diff and timestamps — no tenant fan-out, no handshake
    /// aggregation, no pagination. Distributor-only.
    /// </remarks>
    public Task<ProgramManagementAccountsStatusResponse> GetBillingTransferProgramManagementAccountsStatus(GetBillingTransferProgramManagementAccountsStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/programmanagementaccounts/status"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProgramManagementAccountsStatusResponse>(),
            GetBillingTransferProgramManagementAccountsStatusError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List end-customers under a reseller PMA
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListEndCustomersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingTransferEndCustomersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the end-customer AWS account mappings under a reseller's program management
    /// account, identified by <c>dpmaId</c> and <c>resellerPmaAccountId</c>. Callable by the reseller who
    /// owns the PMA or the distributor who owns the DPMA.
    /// </remarks>
    public Task<ListEndCustomersResponse> ListBillingTransferEndCustomers(ListBillingTransferEndCustomersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/end-customers"),
            [],
            [
                new Param("dpmaId", request.DpmaId),
                new Param("resellerPmaAccountId", request.ResellerPmaAccountId),
                new Param("includeRevoked", request.IncludeRevoked),
            ],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListEndCustomersResponse>(),
            ListBillingTransferEndCustomersError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List end-customers under a reseller PMA, by reseller PMA alone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListEndCustomersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingTransferEndCustomersByResellerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Same result as <c>GET /billingtransfer/v1/end-customers</c>, identified by
    /// <c>resellerPmaAccountId</c> alone (no <c>dpmaId</c> needed). Callable by the reseller who owns the
    /// PMA or the distributor who owns its DPMA.
    /// </remarks>
    public Task<ListEndCustomersResponse> ListBillingTransferEndCustomersByReseller(ListBillingTransferEndCustomersByResellerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers"),
            [new TemplateParam("resellerPmaAccountId", request.ResellerPmaAccountId)],
            [new Param("includeRevoked", request.IncludeRevoked)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListEndCustomersResponse>(),
            ListBillingTransferEndCustomersByResellerError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List program management accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProgramManagementAccountList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingTransferProgramManagementAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to
    /// each one, including AWS Organizations handshake status per account. Distributor-only.
    /// </remarks>
    public Task<ProgramManagementAccountList> ListBillingTransferProgramManagementAccounts(ListBillingTransferProgramManagementAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/programmanagementaccounts"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProgramManagementAccountList>(),
            ListBillingTransferProgramManagementAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the caller's reseller PMA nodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResellerAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingTransferResellerAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists every reseller program management account (RPMA) node belonging to the calling
    /// reseller, with handshake state and status but without end-customer tenants — the
    /// reseller-tier analog of <c>GET /billingtransfer/v1/programmanagementaccounts</c>.
    /// </remarks>
    public Task<ListResellerAccountsResponse> ListBillingTransferResellerAccounts(ListBillingTransferResellerAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/reseller-accounts"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResellerAccountsResponse>(),
            ListBillingTransferResellerAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the caller's reseller PMA nodes with their end-customer tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResellerAccountsWithTenantsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBillingTransferResellerAccountsWithTenantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists every reseller PMA node belonging to the calling reseller, each with the
    /// end-customer tenants connected under it — the reseller-tier analog of
    /// <c>GET /billingtransfer/v1/programmanagementaccounts</c>. <c>region</c>, <c>iamStatus</c> and
    /// <c>lastRefreshTime</c> are inherited from the parent DPMA root; the reseller node itself
    /// carries no IAM/region metadata of its own.
    /// </remarks>
    public Task<ListResellerAccountsWithTenantsResponse> ListBillingTransferResellerAccountsWithTenants(ListBillingTransferResellerAccountsWithTenantsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/billingtransfer/v1/reseller-accounts/end-customers"),
            [],
            [new Param("includeRevoked", request.IncludeRevoked)],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResellerAccountsWithTenantsResponse>(),
            ListBillingTransferResellerAccountsWithTenantsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
