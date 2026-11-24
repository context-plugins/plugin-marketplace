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
using CodeQr.Requests.Links;

namespace CodeQr.Api;

public sealed class Links
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Links(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk create links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="LinksBulkResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk create up to 100 links for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<LinksBulkResponse1>> BulkCreateLinks(BulkCreateLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<LinksBulkResponse1>>(),
            BulkCreateLinksError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk delete links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinksBulkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkDeleteLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk delete up to 100 links for the authenticated workspace.
    /// </remarks>
    public Task<LinksBulkResponse> BulkDeleteLinks(BulkDeleteLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/bulk"),
            [],
            [new Param("linkIds", request.LinkIds, SerializationFormat.Csv)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<LinksBulkResponse>(),
            BulkDeleteLinksError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkCodeqrIoLinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new link for the authenticated workspace.
    /// </remarks>
    public Task<LinkCodeqrIoLinksApi> CreateLink(CreateLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkCodeqrIoLinksApi>(),
            CreateLinkError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a link for the authenticated workspace.
    /// </remarks>
    public Task<LinksResponse> DeleteLink(DeleteLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/{linkId}"),
            [new TemplateParam("linkId", request.LinkId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<LinksResponse>(),
            DeleteLinkError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkCodeqrIoLinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLinkInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the info for a link.
    /// </remarks>
    public Task<LinkCodeqrIoLinksApi> GetLinkInfo(GetLinkInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/info"),
            [],
            [
                new Param("projectSlug", request.ProjectSlug),
                new Param("domain", request.Domain),
                new Param("key", request.Key),
                new Param("linkId", request.LinkId),
                new Param("externalId", request.ExternalId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LinkCodeqrIoLinksApi>(),
            GetLinkInfoError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="LinkCodeqrIoLinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of links for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<LinkCodeqrIoLinksApi>> GetLinks(GetLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links"),
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
                new Param("password", request.Password),
                new Param("expiresAt", request.ExpiresAt?.ToIso8601()),
                new Param(request.Geo),
                new Param("ios", request.Ios),
                new Param("android", request.Android),
                new Param("comments", request.Comments),
                new Param("withTags", request.WithTags),
                new Param("trackConversion", request.TrackConversion),
                new Param("useAsTemplate", request.UseAsTemplate),
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
                new Param("clicksMin", request.ClicksMin),
                new Param("clicksMax", request.ClicksMax),
                new Param("utm_source", request.UtmSource),
                new Param("utm_medium", request.UtmMedium),
                new Param("utm_campaign", request.UtmCampaign),
                new Param("utm_content", request.UtmContent),
                new Param("utm_term", request.UtmTerm),
                new Param("sort", request.Sort),
                new Param("linkIds", request.LinkIds),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<LinkCodeqrIoLinksApi>>(),
            GetLinksError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve links count
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="double"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLinksCountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the number of links for the authenticated workspace.
    /// </remarks>
    public Task<double> GetLinksCount(GetLinksCountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/count"),
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
                new Param("password", request.Password),
                new Param("expiresAt", request.ExpiresAt?.ToIso8601()),
                new Param(request.Geo),
                new Param("ios", request.Ios),
                new Param("android", request.Android),
                new Param("comments", request.Comments),
                new Param("withTags", request.WithTags),
                new Param("trackConversion", request.TrackConversion),
                new Param("useAsTemplate", request.UseAsTemplate),
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
                new Param("clicksMin", request.ClicksMin),
                new Param("clicksMax", request.ClicksMax),
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
            GetLinksCountError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkCodeqrIoLinksApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a link for the authenticated workspace. If there's no change, returns it as it is.
    /// </remarks>
    public Task<LinkCodeqrIoLinksApi> UpdateLink(UpdateLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/links/{linkId}"),
            [new TemplateParam("linkId", request.LinkId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkCodeqrIoLinksApi>(),
            UpdateLinkError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
