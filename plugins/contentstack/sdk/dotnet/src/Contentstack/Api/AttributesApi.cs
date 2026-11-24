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
using Contentstack.Requests.AttributesApi;

namespace Contentstack.Api;

/// <summary>
/// Attributes represent individual user data characteristics such as age, location, or browsing history used to define audience segments.
/// </summary>
public sealed class AttributesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AttributesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttributeModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new user attribute definition in the Personalize project. Attributes can be of various types including string, number, boolean, and date, and are used to build audience segment rules.
    /// </remarks>
    public Task<AttributeModel> CreateAttribute(CreateAttributeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/attributes"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AttributeModel>(),
            CreateAttributeError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot be deleted until those references are removed.
    /// </remarks>
    public Task DeleteAttribute(DeleteAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/attributes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAttributeError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttributeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build audience segment rules.
    /// </remarks>
    public Task<AttributeList> GetAllAttributes(GetAllAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/attributes"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AttributeList>(),
            GetAllAttributesError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an attribute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AttributeModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAttributeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing attribute in the Personalize project including its name, key, and data type.
    /// </remarks>
    public Task<AttributeModel> UpdateAttribute(UpdateAttributeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackPersonalizeManagementAttributesApi("/attributes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AttributeModel>(),
            UpdateAttributeError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
