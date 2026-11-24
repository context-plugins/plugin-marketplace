using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models;
using CodeQr.Models.AnyOf;
using CodeQr.Requests.QrCodes;

namespace CodeQr.Api;

public sealed class QrCodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal QrCodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk create QR Codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="QrcodesBulkResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateQrCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk create up to 100 QR Codes for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<QrcodesBulkResponse1>> BulkCreateQrCodes(BulkCreateQrCodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<QrcodesBulkResponse1>>(),
            BulkCreateQrCodesError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk delete QR Codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrcodesBulkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkDeleteQrCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk delete up to 100 QR Codes for the authenticated workspace.
    /// </remarks>
    public Task<QrcodesBulkResponse> BulkDeleteQrCodes(BulkDeleteQrCodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/bulk"),
            [],
            [new Param("qrcodeIds", request.QrcodeIds, SerializationFormat.Csv)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<QrcodesBulkResponse>(),
            BulkDeleteQrCodesError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new QR Code for the authenticated workspace.
    /// </remarks>
    public Task<QrCode> CreateQrCode(CreateQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCode>(),
            CreateQrCodeError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrcodesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a QR Code for the authenticated workspace.
    /// </remarks>
    public Task<QrcodesResponse> DeleteQrCode(DeleteQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/{qrcodeId}"),
            [new TemplateParam("qrcodeId", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<QrcodesResponse>(),
            DeleteQrCodeError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQrCodeInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the info for a QR Code.
    /// </remarks>
    public Task<QrCode> GetQrCodeInfo(GetQrCodeInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/info"),
            [],
            [
                new Param("projectSlug", request.ProjectSlug),
                new Param("domain", request.Domain),
                new Param("key", request.Key),
                new Param("qrCodeId", request.QrCodeId),
                new Param("externalId", request.ExternalId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QrCode>(),
            GetQrCodeInfoError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of QR Codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQrCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of QR Codes for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<QrCode>> GetQrCodes(GetQrCodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes"),
            [],
            [
                new Param("projectSlug", request.ProjectSlug),
                new Param("domain", request.Domain),
                new Param("tagId", request.TagId),
                new Param("tagIds", request.TagIds),
                new Param("tagNames", request.TagNames),
                new Param("folderId", request.FolderId),
                new Param("search", request.Search),
                new Param("userId", request.UserId),
                new Param("showArchived", request.ShowArchived),
                new Param("comments", request.Comments),
                new Param("password", request.Password),
                new Param("expiresAt", request.ExpiresAt?.ToIso8601()),
                new Param("trackConversion", request.TrackConversion),
                new Param("withTags", request.WithTags),
                new Param("useAsTemplate", request.UseAsTemplate),
                new Param("format", request.Format),
                new Param("type", request.Type),
                new Param("hasPassword", request.HasPassword),
                new Param("hasExpiration", request.HasExpiration),
                new Param("hasUTM", request.HasUtm),
                new Param("hasCustomSocial", request.HasCustomSocial),
                new Param("hasGeo", request.HasGeo),
                new Param("hasDevice", request.HasDevice),
                new Param("hasComments", request.HasComments),
                new Param("hasTags", request.HasTags),
                new Param("createdAfter", request.CreatedAfter?.ToIso8601()),
                new Param("createdBefore", request.CreatedBefore?.ToIso8601()),
                new Param("expiresAfter", request.ExpiresAfter?.ToIso8601()),
                new Param("expiresBefore", request.ExpiresBefore?.ToIso8601()),
                new Param("scansMin", request.ScansMin),
                new Param("scansMax", request.ScansMax),
                new Param("utm_source", request.UtmSource),
                new Param("utm_medium", request.UtmMedium),
                new Param("utm_campaign", request.UtmCampaign),
                new Param("utm_content", request.UtmContent),
                new Param("utm_term", request.UtmTerm),
                new Param("sort", request.Sort),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<QrCode>>(),
            GetQrCodesError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve QR Codes count
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="double"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetQrCodesCountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the number of QR Codes for the authenticated workspace.
    /// </remarks>
    public Task<double> GetQrCodesCount(GetQrCodesCountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/count"),
            [],
            [
                new Param("projectSlug", request.ProjectSlug),
                new Param("domain", request.Domain),
                new Param("tagId", request.TagId),
                new Param("tagIds", request.TagIds),
                new Param("tagNames", request.TagNames),
                new Param("folderId", request.FolderId),
                new Param("search", request.Search),
                new Param("userId", request.UserId),
                new Param("showArchived", request.ShowArchived),
                new Param("comments", request.Comments),
                new Param("password", request.Password),
                new Param("expiresAt", request.ExpiresAt?.ToIso8601()),
                new Param("trackConversion", request.TrackConversion),
                new Param("withTags", request.WithTags),
                new Param("useAsTemplate", request.UseAsTemplate),
                new Param("format", request.Format),
                new Param("type", request.Type),
                new Param("hasPassword", request.HasPassword),
                new Param("hasExpiration", request.HasExpiration),
                new Param("hasUTM", request.HasUtm),
                new Param("hasCustomSocial", request.HasCustomSocial),
                new Param("hasGeo", request.HasGeo),
                new Param("hasDevice", request.HasDevice),
                new Param("hasComments", request.HasComments),
                new Param("hasTags", request.HasTags),
                new Param("createdAfter", request.CreatedAfter?.ToIso8601()),
                new Param("createdBefore", request.CreatedBefore?.ToIso8601()),
                new Param("expiresAfter", request.ExpiresAfter?.ToIso8601()),
                new Param("expiresBefore", request.ExpiresBefore?.ToIso8601()),
                new Param("scansMin", request.ScansMin),
                new Param("scansMax", request.ScansMax),
                new Param("utm_source", request.UtmSource),
                new Param("utm_medium", request.UtmMedium),
                new Param("utm_campaign", request.UtmCampaign),
                new Param("utm_content", request.UtmContent),
                new Param("utm_term", request.UtmTerm),
                new Param("groupBy", request.GroupBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<double>(),
            GetQrCodesCountError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a QR Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.
    /// </remarks>
    public Task<QrCode> UpdateQrCode(UpdateQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/qrcodes/{qrcodeId}"),
            [new TemplateParam("qrcodeId", request.QrcodeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCode>(),
            UpdateQrCodeError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
