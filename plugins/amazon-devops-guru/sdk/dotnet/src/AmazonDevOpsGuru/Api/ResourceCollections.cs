using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Exceptions;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Core.Request;
using AmazonDevOpsGuru.Core.Response;
using AmazonDevOpsGuru.Errors;
using AmazonDevOpsGuru.Models;
using AmazonDevOpsGuru.Requests.ResourceCollections;

namespace AmazonDevOpsGuru.Api;

public sealed class ResourceCollections
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ResourceCollections(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Resource Collection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetResourceCollectionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResourceCollectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
    /// </remarks>
    public Task<GetResourceCollectionResponse> GetResourceCollection(GetResourceCollectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/resource-collections/{ResourceCollectionType}"),
            [new TemplateParam("ResourceCollectionType", request.ResourceCollectionType)],
            [new Param("NextToken", request.NextToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetResourceCollectionResponse>(),
            GetResourceCollectionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Resource Collection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateResourceCollectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.
    /// </remarks>
    public Task<object> UpdateResourceCollection(UpdateResourceCollectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/resource-collections"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            UpdateResourceCollectionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
