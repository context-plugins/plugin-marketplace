using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonFreeRtos.Core;
using AmazonFreeRtos.Core.Exceptions;
using AmazonFreeRtos.Core.Models;
using AmazonFreeRtos.Core.Request;
using AmazonFreeRtos.Core.Response;
using AmazonFreeRtos.Errors;
using AmazonFreeRtos.Models;
using AmazonFreeRtos.Requests.Tags;

namespace AmazonFreeRtos.Api;

/// <summary>
/// Resource metadata labels
/// </summary>
public sealed class Tags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tags(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the tags (metadata) you have assigned to the resource.
    /// </remarks>
    public Task<TagsResponse> ListTagsForResource(ListTagsForResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TagsResponse>(),
            ListTagsForResourceError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds to or modifies the tags of the given resource.
    /// </remarks>
    public Task TagResource(TagResourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TagResourceError.Response,
            _auth.AwsSigV4,
            requestOptions,
            cancellationToken);
}
