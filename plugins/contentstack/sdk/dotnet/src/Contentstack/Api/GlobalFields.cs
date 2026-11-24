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
using Contentstack.Requests.GlobalFields;

namespace Contentstack.Api;

/// <summary>
/// Global fields are reusable field groups that can be referenced across multiple content types within a Contentstack stack.
/// </summary>
public sealed class GlobalFields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GlobalFields(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all global fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GlobalFieldList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllGlobalFieldsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches all reusable global field definitions available in the stack. Global fields can be embedded in content type schemas to create consistent field structures across multiple content types.
    /// </remarks>
    public Task<GlobalFieldList> GetAllGlobalFields(GetAllGlobalFieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/global_fields"),
            [],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GlobalFieldList>(),
            GetAllGlobalFieldsError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single global field
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GlobalField"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSingleGlobalFieldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the schema and metadata for a specific global field identified by its UID.
    /// </remarks>
    public Task<GlobalField> GetSingleGlobalField(GetSingleGlobalFieldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/global_fields/{global_field_uid}"),
            [new TemplateParam("global_field_uid", request.GlobalFieldUid)],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GlobalField>(),
            GetSingleGlobalFieldError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
