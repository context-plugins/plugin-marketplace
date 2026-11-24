using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record CertificateSummary
{
    /// <summary>
    /// Amazon Resource Name (ARN) of the certificate. This is of the form: arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs, see Amazon Resource Names (ARNs).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateArn")]
    public string? CertificateArn { get; init; }

    /// <summary>
    /// Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainName")]
    public string? DomainName { get; init; }

    /// <summary>
    /// One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. When called by ListCertificates, this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use DescribeCertificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubjectAlternativeNameSummaries")]
    public IReadOnlyList<string>? SubjectAlternativeNameSummaries { get; init; }

    /// <summary>
    /// When called by ListCertificates, indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use DescribeCertificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HasAdditionalSubjectAlternativeNames")]
    public bool? HasAdditionalSubjectAlternativeNames { get; init; }

    /// <summary>
    /// The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again. If validation succeeds, the certificate enters status ISSUED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAwsCertificateManagerCertificatesApi? Status { get; init; }

    /// <summary>
    /// The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the Certificate Manager User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeAwsCertificateManagerCertificatesApi? Type { get; init; }

    /// <summary>
    /// The algorithm that was used to generate the public-private key pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyAlgorithm")]
    public KeyAlgorithm? KeyAlgorithm { get; init; }

    /// <summary>
    /// A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyUsages")]
    public IReadOnlyList<KeyUsage2>? KeyUsages { get; init; }

    /// <summary>
    /// Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExtendedKeyUsages")]
    public IReadOnlyList<ExtendedKeyUsage2>? ExtendedKeyUsages { get; init; }

    /// <summary>
    /// Indicates if export is enabled for the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExportOption")]
    public ExportOption2? ExportOption { get; init; }

    /// <summary>
    /// Indicates whether the certificate is currently in use by any Amazon Web Services resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InUse")]
    public bool? InUse { get; init; }

    /// <summary>
    /// Indicates whether the certificate has been exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Exported")]
    public bool? Exported { get; init; }

    /// <summary>
    /// Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RenewalEligibility")]
    public RenewalEligibility? RenewalEligibility { get; init; }

    /// <summary>
    /// The time before which the certificate is not valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotBefore")]
    public DateTimeOffset? NotBefore { get; init; }

    /// <summary>
    /// The time after which the certificate is not valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotAfter")]
    public DateTimeOffset? NotAfter { get; init; }

    /// <summary>
    /// The time at which the certificate was requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IssuedAt")]
    public DateTimeOffset? IssuedAt { get; init; }

    /// <summary>
    /// The date and time when the certificate was imported. This value exists only when the certificate type is IMPORTED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImportedAt")]
    public DateTimeOffset? ImportedAt { get; init; }

    /// <summary>
    /// The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RevokedAt")]
    public DateTimeOffset? RevokedAt { get; init; }

    /// <summary>
    /// Identifies the Amazon Web Services service that manages the certificate issued by ACM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManagedBy")]
    public ManagedBy? ManagedBy { get; init; }

    /// <summary>
    /// The origin of the certificate's key pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateKeyPairOrigin")]
    public CertificateKeyPairOrigin? CertificateKeyPairOrigin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
