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
using AwsCertificateManager.Requests.AcmeDomainValidationApi;

namespace AwsCertificateManager.Api;

public sealed class AcmeDomainValidationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AcmeDomainValidationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Acme Domain Validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAcmeDomainValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to issue certificates for specified domain names. You configure prevalidation to prove domain ownership.
    /// </remarks>
    public Task CreateAcmeDomainValidation(CreateAcmeDomainValidationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateAcmeDomainValidation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateAcmeDomainValidationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Acme Domain Validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAcmeDomainValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates for the associated domain.
    /// </remarks>
    public Task DeleteAcmeDomainValidation(DeleteAcmeDomainValidationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteAcmeDomainValidation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAcmeDomainValidationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Acme Domain Validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeAcmeDomainValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed metadata about the specified domain validation, including its status, domain scope, and DNS resource records required for validation.
    /// </remarks>
    public Task DescribeAcmeDomainValidation(DescribeAcmeDomainValidationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeAcmeDomainValidation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeAcmeDomainValidationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Acme Domain Validations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAcmeDomainValidationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of domain validations for the specified ACME endpoint.
    /// </remarks>
    public Task ListAcmeDomainValidations(ListAcmeDomainValidationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListAcmeDomainValidations"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListAcmeDomainValidationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Acme Domain Validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAcmeDomainValidationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the prevalidation configuration of an existing domain validation.
    /// </remarks>
    public Task UpdateAcmeDomainValidation(UpdateAcmeDomainValidationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateAcmeDomainValidation"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateAcmeDomainValidationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
