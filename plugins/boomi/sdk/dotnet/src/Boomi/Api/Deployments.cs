using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Deployments;

namespace Boomi.Api;

/// <summary>
/// Manage deployed packages and the deployment of integration components to environments.
/// </summary>
public sealed class Deployments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Deployments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Deploy a package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployedPackage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDeployedPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deploys a packaged component to an environment. Creates a new deployed package record associating the package with the target environment.
    /// </remarks>
    public Task<DeployedPackage> CreateDeployedPackage(CreateDeployedPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DeployedPackage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeployedPackage>(),
            CreateDeployedPackageError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Undeploy a package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDeployedPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a deployed package from its environment, undeploying the component.
    /// </remarks>
    public Task DeleteDeployedPackage(DeleteDeployedPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DeployedPackage/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDeployedPackageError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get a deployed package
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployedPackage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeployedPackageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific deployed package by its ID.
    /// </remarks>
    public Task<DeployedPackage> GetDeployedPackage(GetDeployedPackageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DeployedPackage/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeployedPackage>(),
            GetDeployedPackageError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Query deployed packages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployedPackageQueryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryDeployedPackagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current deployments across environments.
    /// </remarks>
    public Task<DeployedPackageQueryResult> QueryDeployedPackages(QueryDeployedPackagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/DeployedPackage/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeployedPackageQueryResult>(),
            QueryDeployedPackagesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
