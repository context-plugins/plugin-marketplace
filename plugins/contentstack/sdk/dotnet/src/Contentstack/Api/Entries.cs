using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Entries;

namespace Contentstack.Api;

/// <summary>
/// Entries are instances of content types that hold the actual content data. They can be filtered, sorted, paginated, and localized.
/// </summary>
public sealed class Entries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Entries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Entry2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new entry for the specified content type. The entry data must conform to the content type schema. Newly created entries are in draft state and must be published separately.
    /// </remarks>
    public Task<Entry2> CreateEntry(CreateEntryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries"),
            [new TemplateParam("content_type_uid", request.ContentTypeUid)],
            [new Param("locale", request.Locale)],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Entry2>(),
            CreateEntryError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This action cannot be undone.
    /// </remarks>
    public Task DeleteEntry(DeleteEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEntryError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntryList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a list of all published entries for a particular content type. Supports filtering by query, localization, reference inclusion, pagination, sorting, and field selection.
    /// </remarks>
    public Task<EntryList> GetAllEntries(GetAllEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries"),
            [new TemplateParam("content_type_uid", request.ContentTypeUid)],
            [
                new Param("locale", request.Locale),
                new Param("skip", request.Skip),
                new Param("limit", request.Limit),
                new Param("query", request.Query),
                new Param("include_count", request.IncludeCount),
                new Param("include_content_type", request.IncludeContentType),
                new Param("include_reference", request.IncludeReference),
                new Param("only", request.Only),
                new Param("except", request.Except),
                new Param("asc", request.Asc),
                new Param("desc", request.Desc),
            ],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntryList>(),
            GetAllEntriesError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Entry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSingleEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific published entry identified by its UID within a given content type. Supports localization, reference inclusion, and field selection parameters.
    /// </remarks>
    public Task<Entry> GetSingleEntry(GetSingleEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [
                new Param("locale", request.Locale),
                new Param("include_reference", request.IncludeReference),
                new Param("version", request.Version),
            ],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Entry>(),
            GetSingleEntryError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish an entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublishEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publishes an entry to one or more environments and locales. Publishing makes the entry available via the Content Delivery API for the specified environments.
    /// </remarks>
    public Task PublishEntry(PublishEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}/publish"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PublishEntryError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish an entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnpublishEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the specified environments.
    /// </remarks>
    public Task UnpublishEntry(UnpublishEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}/unpublish"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UnpublishEntryError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Entry2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the field values of an existing entry. Only the fields included in the request body are updated; other fields retain their current values.
    /// </remarks>
    public Task<Entry2> UpdateEntry(UpdateEntryOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}/entries/{entry_uid}"),
            [
                new TemplateParam("content_type_uid", request.ContentTypeUid),
                new TemplateParam("entry_uid", request.EntryUid),
            ],
            [new Param("locale", request.Locale)],
            [
                new HeaderParam("api_key", request.ApiKey),
                new HeaderParam("authtoken", request.Authtoken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Entry2>(),
            UpdateEntryError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
