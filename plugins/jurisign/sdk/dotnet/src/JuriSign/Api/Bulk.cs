using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Models;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;
using JuriSign.Requests.Bulk;

namespace JuriSign.Api;

/// <summary>
/// Merge templates and bulk campaigns (one individualised request per recipient)
/// </summary>
public sealed class Bulk
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bulk(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Bulk Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelBulkCampaignError"/> when the server returns an error response.</exception>
    public Task<BulkCampaignsCancelResponse> CancelBulkCampaign(CancelBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsCancelResponse>(),
            CancelBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bulk Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBulkCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients). Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing fields, invalid email, duplicate email) are skipped and reported in <c>skipped_recipients</c>, not fatal.
    /// </remarks>
    public Task<BulkCampaignsResponse1> CreateBulkCampaign(CreateBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkCampaignsResponse1>(),
            CreateBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Bulk Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBulkTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a merge-field HTML template (e.g. `
    /// Bonjour {{prenom}} {{nom}}
    /// `). Merge fields are auto-extracted from the content.
    /// </remarks>
    public Task<BulkTemplatesResponse1> CreateBulkTemplate(CreateBulkTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-templates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkTemplatesResponse1>(),
            CreateBulkTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bulk Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBulkCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fails with 422 if the campaign is currently processing.
    /// </remarks>
    public Task<MessageResponse> DeleteBulkCampaign(DeleteBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Bulk Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteBulkTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fails with 422 if the template is still referenced by a campaign.
    /// </remarks>
    public Task<MessageResponse> DeleteBulkTemplate(DeleteBulkTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-templates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteBulkTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export Campaign Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportBulkCampaignResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per-recipient status, send/sign timestamps, and error messages.
    /// </remarks>
    public Task<BulkCampaignsExportResponse> ExportBulkCampaignResults(ExportBulkCampaignResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}/export"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsExportResponse>(),
            ExportBulkCampaignResultsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bulk Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBulkCampaignError"/> when the server returns an error response.</exception>
    public Task<BulkCampaignsResponse2> GetBulkCampaign(GetBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsResponse2>(),
            GetBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bulk Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBulkTemplateError"/> when the server returns an error response.</exception>
    public Task<BulkTemplatesResponse1> GetBulkTemplate(GetBulkTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-templates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkTemplatesResponse1>(),
            GetBulkTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Launch Bulk Campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsLaunchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LaunchBulkCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and sends it. Fails with 422 if the organization does not have enough remaining credits.
    /// </remarks>
    public Task<BulkCampaignsLaunchResponse> LaunchBulkCampaign(LaunchBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}/launch"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsLaunchResponse>(),
            LaunchBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bulk Campaigns
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBulkCampaignsError"/> when the server returns an error response.</exception>
    public Task<BulkCampaignsResponse> ListBulkCampaigns(ListBulkCampaignsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns"),
            [],
            [new Param("status", request.Status), new Param("per_page", request.PerPage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsResponse>(),
            ListBulkCampaignsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Bulk Templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBulkTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve reusable merge-field HTML templates used by bulk campaigns.
    /// </remarks>
    public Task<BulkTemplatesResponse> ListBulkTemplates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-templates"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BulkTemplatesResponse>(),
            ListBulkTemplatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry Failed Recipients
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkCampaignsRetryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetryBulkCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resets recipients in error back to pending so the campaign can be launched again.
    /// </remarks>
    public Task<BulkCampaignsRetryResponse> RetryBulkCampaign(RetryBulkCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-campaigns/{id}/retry"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BulkCampaignsRetryResponse>(),
            RetryBulkCampaignError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Bulk Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkTemplatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBulkTemplateError"/> when the server returns an error response.</exception>
    public Task<BulkTemplatesResponse1> UpdateBulkTemplate(UpdateBulkTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bulk-templates/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkTemplatesResponse1>(),
            UpdateBulkTemplateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
