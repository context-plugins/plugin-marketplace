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

namespace AwsXRay.Api;

public sealed class EncryptionconfigApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EncryptionconfigApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Encryption Config
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetEncryptionConfigResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEncryptionConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the current encryption configuration for X-Ray data.
    /// </remarks>
    public Task<GetEncryptionConfigResult> GetEncryptionConfig(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/EncryptionConfig"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<GetEncryptionConfigResult>(),
            GetEncryptionConfigError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
