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
using AwsCertificateManager.Requests.AcmeExternalAccountBindingApi;

namespace AwsCertificateManager.Api;

public sealed class AcmeExternalAccountBindingApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AcmeExternalAccountBindingApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Acme External Account Binding
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAcmeExternalAccountBindingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.
    /// </remarks>
    public Task CreateAcmeExternalAccountBinding(CreateAcmeExternalAccountBindingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateAcmeExternalAccountBinding"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateAcmeExternalAccountBindingError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Acme External Account Binding
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAcmeExternalAccountBindingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.
    /// </remarks>
    public Task DeleteAcmeExternalAccountBinding(DeleteAcmeExternalAccountBindingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteAcmeExternalAccountBinding"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAcmeExternalAccountBindingError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Acme External Account Binding
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAcmeExternalAccountBindingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.
    /// </remarks>
    public Task DescribeAcmeExternalAccountBinding(DescribeAcmeExternalAccountBindingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeAcmeExternalAccountBinding"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeAcmeExternalAccountBindingError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Acme External Account Bindings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAcmeExternalAccountBindingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of external account bindings for the specified ACME endpoint.
    /// </remarks>
    public Task ListAcmeExternalAccountBindings(ListAcmeExternalAccountBindingsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListAcmeExternalAccountBindings"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListAcmeExternalAccountBindingsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke Acme External Account Binding
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeAcmeExternalAccountBindingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.
    /// </remarks>
    public Task RevokeAcmeExternalAccountBinding(RevokeAcmeExternalAccountBindingOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RevokeAcmeExternalAccountBinding"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RevokeAcmeExternalAccountBindingError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
