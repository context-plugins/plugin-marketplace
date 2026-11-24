using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.PartnerDocuments;

namespace Curlec.Api;

/// <summary>
/// Upload and fetch KYC documents for sub-merchant accounts and their stakeholders.
/// </summary>
public sealed class PartnerDocuments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerDocuments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch KYC documents for a sub-merchant account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountDocument"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAccountDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<AccountDocument> FetchAccountDocuments(FetchAccountDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/documents"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountDocument>(),
            FetchAccountDocumentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch KYC documents for a stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StakeholderDocument"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchStakeholderDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth access_token.
    /// </remarks>
    public Task<StakeholderDocument> FetchStakeholderDocuments(FetchStakeholderDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            [
                new TemplateParam("account_id", request.AccountId),
                new TemplateParam("stakeholder_id", request.StakeholderId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StakeholderDocument>(),
            FetchStakeholderDocumentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload KYC documents for a sub-merchant account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountDocument"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAccountDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload KYC documents for business identity and address verification. Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.
    /// </remarks>
    public Task<AccountDocument> UploadAccountDocuments(UploadAccountDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/documents"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("document_type", request.DocumentType),
                new MultipartParam("file", request.File)),
            JsonResponse.Create<AccountDocument>(),
            UploadAccountDocumentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload KYC documents for a stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StakeholderDocument"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadStakeholderDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar (front/back), passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.
    /// </remarks>
    public Task<StakeholderDocument> UploadStakeholderDocuments(UploadStakeholderDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents"),
            [
                new TemplateParam("account_id", request.AccountId),
                new TemplateParam("stakeholder_id", request.StakeholderId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("document_type", request.DocumentType),
                new MultipartParam("file", request.File)),
            JsonResponse.Create<StakeholderDocument>(),
            UploadStakeholderDocumentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
