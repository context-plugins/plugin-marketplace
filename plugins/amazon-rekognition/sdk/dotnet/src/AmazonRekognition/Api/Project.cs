using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonRekognition.Core;
using AmazonRekognition.Core.Exceptions;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Core.Request;
using AmazonRekognition.Core.Response;
using AmazonRekognition.Errors;
using AmazonRekognition.Requests.Project;

namespace AmazonRekognition.Api;

public sealed class Project
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Project(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a feature to create the project with, if no feature is specified then Custom Labels is used by default. For adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument. This operation requires permissions to perform the rekognition:CreateProject action.
    /// </remarks>
    public Task CreateProject(CreateProjectOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateProject"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateProjectError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any ProjectPolicies associated with that project. This operation requires permissions to perform the rekognition:DeleteProject action.
    /// </remarks>
    public Task DeleteProject(DeleteProjectOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteProject"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteProjectError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about your Rekognition projects. This operation requires permissions to perform the rekognition:DescribeProjects action.
    /// </remarks>
    public Task DescribeProjects(DescribeProjectsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeProjects"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeProjectsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
