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
using AwsCertificateManager.Requests.Operations;

namespace AwsCertificateManager.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Account Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAccountConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the account configuration options associated with an Amazon Web Services account.
    /// </remarks>
    public Task GetAccountConfiguration(GetAccountConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetAccountConfiguration"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAccountConfigurationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Acme External Account Binding Credentials
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAcmeExternalAccountBindingCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.
    /// </remarks>
    public Task GetAcmeExternalAccountBindingCredentials(GetAcmeExternalAccountBindingCredentialsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetAcmeExternalAccountBindingCredentials"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetAcmeExternalAccountBindingCredentialsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Certificate Domain Validations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCertificateDomainValidationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns per-domain validation summaries for an ACM certificate. Each summary includes the domain name, the active validation configuration, and the requested validation configuration when a validation method migration is in progress. You can use the results to monitor the progress of an email-to-DNS validation migration and to retrieve the CNAME records required for DNS validation.
    /// </remarks>
    public Task ListCertificateDomainValidations(ListCertificateDomainValidationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCertificateDomainValidations"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCertificateDomainValidationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Account Configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutAccountConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds or modifies account-level configurations in ACM. The supported configuration option is DaysBeforeExpiry. This option specifies the number of days prior to certificate expiration when ACM starts generating EventBridge events. ACM sends one event per day per certificate until the certificate expires. By default, accounts receive events starting 45 days before certificate expiration.
    /// </remarks>
    public Task PutAccountConfiguration(PutAccountConfigurationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#PutAccountConfiguration"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutAccountConfigurationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Renew Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenewCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Renews an eligible ACM certificate. In order to renew your Amazon Web Services Private CA certificates with ACM, you must first grant the ACM service principal permission to do so. For more information, see Testing Managed Renewal in the ACM User Guide.
    /// </remarks>
    public Task RenewCertificate(RenewCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RenewCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RenewCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Request Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RequestCertificate2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.
    /// </remarks>
    public Task RequestCertificate2(RequestCertificate2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RequestCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RequestCertificate2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resend Validation Email
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResendValidationEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.
    /// </remarks>
    public Task ResendValidationEmail(ResendValidationEmailOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ResendValidationEmail"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ResendValidationEmailError.Response,
            _auth.Sigv4,
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
    /// Adds one or more tags to an ACM resource. Tags are labels that you can use to identify and organize your Amazon Web Services resources. Each tag consists of a key and an optional value. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use AddTagsToCertificate instead. To remove one or more tags, use the UntagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.
    /// </remarks>
    public Task TagResource(TagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#TagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes one or more tags from an ACM resource. Use this action for all ACM resource types except the certificate resource type. For certificate resources, use RemoveTagsFromCertificate instead. To add one or more tags, use the TagResource action. To view all of the tags that have been applied to a resource, use the ListTagsForResource action.
    /// </remarks>
    public Task UntagResource(UntagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UntagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UntagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Certificate Options
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCertificateOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates certificate options. You can use this operation to change the domain validation method or specify whether to export your certificate. For more information, see Migrate from email to DNS validation and Certificate Manager Exportable Managed Certificates.
    /// </remarks>
    public Task UpdateCertificateOptions(UpdateCertificateOptionsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateCertificateOptions"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateCertificateOptionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
