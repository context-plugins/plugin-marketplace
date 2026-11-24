using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Exceptions;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Request;
using AtlassianCompass.Core.Response;
using AtlassianCompass.Errors;
using AtlassianCompass.Requests.PackageDependencies;

namespace AtlassianCompass.Api;

/// <summary>
/// This resource represents package dependencies. Use this resource to associate package dependencies with a component.
/// </summary>
public sealed class PackageDependencies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PackageDependencies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Package Dependencies given a Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteLockFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete all the package dependencies associated with a particular source.The <c>sourceId</c> parameter needs to be Base64 encoded.
    /// </remarks>
    public Task DeleteLockFile(DeleteLockFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}"),
            [new TemplateParam("componentId", request.ComponentId), new TemplateParam("sourceId", request.SourceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteLockFileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Package Dependencies via Lock File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadLockFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload package dependencies for a component.
    /// <para>
    /// The file with package dependency information. Currently, we only accept package-lock.json files that are below 2MB. \
    /// \
    /// The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where dependencies were found. \
    /// \
    /// The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to the lock file, with the "/" characters replaced with "_" characters.
    /// </para>
    /// <para>
    /// Example: This curl command uploads a lock file to populate package dependencies for the component.
    /// <code>
    /// curl --request PUT \
    /// --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file' \
    /// --user 'email@example.com:' \
    /// --header 'Content-Type: multipart/form-data' \
    /// --form file=@/path/to/file/package-lock.json;type=application/json
    /// --form componentId=
    /// --form baseSourceUrl=
    /// --form sourceId=
    /// </code>
    /// </para>
    /// </remarks>
    public Task UploadLockFile(UploadLockFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/package_dependencies/lock_file"),
            [],
            [
                new Param("sourceId", request.SourceId),
                new Param("baseSourceUrl", request.BaseSourceUrl),
                new Param("componentId", request.ComponentId),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            FormRequest.Create(new MultipartParam("file", request.File)),
            VoidResponse.Instance,
            UploadLockFileError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
