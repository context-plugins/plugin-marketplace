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
using AmazonLex.Requests.Tags;

namespace AmazonLex.Api;

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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTagsForResourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.
    /// </remarks>
    public Task<ListTagsForResourceResponse> ListTagsForResource(ListTagsForResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
            [new TemplateParam("resourceARN", request.ResourceArn)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTagsForResourceResponse>(),
            ListTagsForResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModelsLexListTagsForResourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResource1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.
    /// </remarks>
    public Task<ModelsLexListTagsForResourceResponse> ListTagsForResource1(ListTagsForResource1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ModelsLexListTagsForResourceResponse>(),
            ListTagsForResource1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
    /// </remarks>
    public Task<object> TagResource(TagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
            [new TemplateParam("resourceARN", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            TagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagResource1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
    /// </remarks>
    public Task<object> TagResource1(TagResource1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            TagResource1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes tags from a bot, bot alias, or bot channel.
    /// </remarks>
    public Task<object> UntagResource(UntagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
            [new TemplateParam("resourceARN", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            UntagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagResource1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes tags from a bot, bot alias or bot channel.
    /// </remarks>
    public Task<object> UntagResource1(UntagResource1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
            [new TemplateParam("resourceArn", request.ResourceArn)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            UntagResource1Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
