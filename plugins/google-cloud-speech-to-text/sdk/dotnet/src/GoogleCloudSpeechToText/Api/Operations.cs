using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core;
using GoogleCloudSpeechToText.Core.Authentication;
using GoogleCloudSpeechToText.Core.Exceptions;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Core.Request;
using GoogleCloudSpeechToText.Core.Response;
using GoogleCloudSpeechToText.Errors;
using GoogleCloudSpeechToText.Models;
using GoogleCloudSpeechToText.Requests.Operations;

namespace GoogleCloudSpeechToText.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> SpeechOperationsGet(SpeechOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/operations/{operationsId}"),
            [new TemplateParam("operationsId", request.OperationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            SpeechOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<ListOperationsResponse> SpeechOperationsList(SpeechOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/operations"),
            [],
            [
                new Param("filter", request.Filter),
                new Param("name", request.Name),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("returnPartialSuccess", request.ReturnPartialSuccess),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListOperationsResponse>(),
            SpeechOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
