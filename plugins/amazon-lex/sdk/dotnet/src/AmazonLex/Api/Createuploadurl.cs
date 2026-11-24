using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Createuploadurl;

namespace AmazonLex.Api;

public sealed class Createuploadurl
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Createuploadurl(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Upload Url
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateUploadUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUploadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.
    /// </remarks>
    public Task<CreateUploadUrlResponse> CreateUploadUrl(CreateUploadUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/createuploadurl"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateUploadUrlResponse>(),
            CreateUploadUrlError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
