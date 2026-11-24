using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record RequestCertificateRequest
{
    /// <summary>
    /// Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. In compliance with RFC 5280, the length of the domain name (technically, the Common Name) that you provide cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative Name field, which supports names up to 253 octets in length.
    /// </summary>
    [JsonPropertyName("DomainName")]
    public required string DomainName { get; init; }

    /// <summary>
    /// The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can validate with DNS or validate with email. We recommend that you use DNS validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod4? ValidationMethod { get; init; }

    /// <summary>
    /// Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the DomainName field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial quota is 10 domain names. If you need more than 10 names, you must request a quota increase. For more information, see Quotas. The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubjectAlternativeNames")]
    public IReadOnlyList<string>? SubjectAlternativeNames { get; init; }

    /// <summary>
    /// Customer chosen string that can be used to distinguish between calls to RequestCertificate. Idempotency tokens time out after one hour. Therefore, if you call RequestCertificate multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdempotencyToken")]
    public string? IdempotencyToken { get; init; }

    /// <summary>
    /// The domain name that you want ACM to use to send you emails so that you can validate domain ownership.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainValidationOptions")]
    public IReadOnlyList<DomainValidationOption>? DomainValidationOptions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Options")]
    public CertificateOptions? Options { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the Amazon Web Services Private Certificate Authority user guide. The ARN must have the following form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateAuthorityArn")]
    public string? CertificateAuthorityArn { get; init; }

    /// <summary>
    /// One or more resource tags to associate with the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the A
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyAlgorithm")]
    public KeyAlgorithm4? KeyAlgorithm { get; init; }

    /// <summary>
    /// Identifies the Amazon Web Services service that manages the certificate issued by ACM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManagedBy")]
    public ManagedBy? ManagedBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
