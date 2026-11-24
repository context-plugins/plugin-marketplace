using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;

namespace Contentstack.Api;

/// <summary>
/// File upload endpoints provide pre-signed URLs for securely uploading build artifacts to Contentstack Launch infrastructure before triggering a deployment.
/// </summary>
public sealed class FileUploads
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FileUploads(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get project upload URL
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UploadUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectUploadUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to upload your build package before triggering a deployment.
    /// </remarks>
    public Task<UploadUrlResponse> GetProjectUploadUrl(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/upload-url"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UploadUrlResponse>(),
            GetProjectUploadUrlError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
