using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using HealthGorilla.Core;
using HealthGorilla.Core.ErrorResponse;
using HealthGorilla.Core.Exceptions;
using HealthGorilla.Core.Models;
using HealthGorilla.Core.Request;
using HealthGorilla.Core.Response;
using HealthGorilla.Models;
using HealthGorilla.Requests.DocumentReferenceApi;

namespace HealthGorilla.Api;

/// <summary>
/// Clinical document metadata.
/// </summary>
public sealed class DocumentReferenceApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DocumentReferenceApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Read a DocumentReference resource by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentReference"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<DocumentReference> ReadDocumentReference(ReadDocumentReferenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DocumentReference/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentReference>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search DocumentReference resources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Bundle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Bundle> SearchDocumentReferences(SearchDocumentReferencesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DocumentReference"),
            [],
            [
                new Param("patient", request.Patient),
                new Param("type", request.Type),
                new Param("_count", request.Count),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Bundle>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
