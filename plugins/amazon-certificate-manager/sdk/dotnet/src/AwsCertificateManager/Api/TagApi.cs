using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsCertificateManager.Core;
using AwsCertificateManager.Core.Exceptions;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Core.Request;
using AwsCertificateManager.Core.Response;
using AwsCertificateManager.Errors;
using AwsCertificateManager.Requests.TagApi;

namespace AwsCertificateManager.Api;

public sealed class TagApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TagApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add Tags To Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTagsToCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. This action applies only to the certificate resource type. For all other ACM resource types, use TagResource instead. You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates. To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action.
    /// </remarks>
    public Task AddTagsToCertificate(AddTagsToCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AddTagsToCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AddTagsToCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. This action applies only to the certificate resource type. For all other ACM resource types, use ListTagsForResource instead.
    /// </remarks>
    public Task ListTagsForCertificate(ListTagsForCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTagsForCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTagsForCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the tags associated with an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use ListTagsForCertificate instead. To add one or more tags, use the TagResource action. To remove one or more tags, use the UntagResource action.
    /// </remarks>
    public Task ListTagsForResource(ListTagsForResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTagsForResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTagsForResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove Tags From Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTagsFromCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. This action applies only to the certificate resource type. For all other ACM resource types, use UntagResource instead. To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action.
    /// </remarks>
    public Task RemoveTagsFromCertificate(RemoveTagsFromCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RemoveTagsFromCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveTagsFromCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
