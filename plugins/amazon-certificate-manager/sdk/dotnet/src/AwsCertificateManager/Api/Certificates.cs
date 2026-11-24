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
using AwsCertificateManager.Requests.Certificates;

namespace AwsCertificateManager.Api;

public sealed class Certificates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Certificates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u
    /// </remarks>
    public Task DeleteCertificate(DeleteCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.
    /// </remarks>
    public Task DescribeCertificate(DescribeCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key associated with the public key that is embedded in the certificate. For security, you must assign a passphrase for the private key when exporting it. For information about exporting and formatting a certificate using the ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates created prior to June 17, 2025 cannot be exported.
    /// </remarks>
    public Task ExportCertificate(ExportCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ExportCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ExportCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.
    /// </remarks>
    public Task GetCertificate(GetCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal for certificates that you import. Note the following guidelines when importing third party certificates: You must enter the private key that matches the certificate you are importing. The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase. The private key must be no larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The current time must be between the Not Before and Not After certificate fields. The Issuer field must not be empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,
    /// </remarks>
    public Task ImportCertificate(ImportCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ImportCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ImportCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Certificates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCertificatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the CertificateKeyPairOrigins filter.
    /// </remarks>
    public Task ListCertificates(ListCertificatesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCertificates"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCertificatesError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="RequestCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds before you can retrieve information about the new certificate.
    /// </remarks>
    public Task RequestCertificate(RequestCertificateOperationRequest request,
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
            RequestCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke Certificate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevokeCertificateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.
    /// </remarks>
    public Task RevokeCertificate(RevokeCertificateOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RevokeCertificate"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RevokeCertificateError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Certificates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCertificatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.
    /// </remarks>
    public Task SearchCertificates(SearchCertificatesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#SearchCertificates"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SearchCertificatesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
