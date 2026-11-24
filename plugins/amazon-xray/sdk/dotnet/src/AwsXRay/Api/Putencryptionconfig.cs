using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsXRay.Core;
using AwsXRay.Core.Exceptions;
using AwsXRay.Core.Models;
using AwsXRay.Core.Request;
using AwsXRay.Core.Response;
using AwsXRay.Errors;
using AwsXRay.Models;
using AwsXRay.Requests.Putencryptionconfig;

namespace AwsXRay.Api;

public sealed class Putencryptionconfig
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Putencryptionconfig(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Put Encryption Config
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutEncryptionConfigResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutEncryptionConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the encryption configuration for X-Ray data.
    /// </remarks>
    public Task<PutEncryptionConfigResult> PutEncryptionConfig(PutEncryptionConfigOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/PutEncryptionConfig"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutEncryptionConfigResult>(),
            PutEncryptionConfigError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
