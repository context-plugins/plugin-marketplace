using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record AcmCertificateMetadata
{
    /// <summary>
    /// The time at which the certificate was requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Indicates whether the certificate has been exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Exported")]
    public bool? Exported { get; init; }

    /// <summary>
    /// The date and time when the certificate was imported. This value exists only when the certificate type is IMPORTED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImportedAt")]
    public DateTimeOffset? ImportedAt { get; init; }

    /// <summary>
    /// Indicates whether the certificate is currently in use by an Amazon Web Services service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InUse")]
    public bool? InUse { get; init; }

    /// <summary>
    /// The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IssuedAt")]
    public DateTimeOffset? IssuedAt { get; init; }

    /// <summary>
    /// Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RenewalEligibility")]
    public RenewalEligibility? RenewalEligibility { get; init; }

    /// <summary>
    /// The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RevokedAt")]
    public DateTimeOffset? RevokedAt { get; init; }

    /// <summary>
    /// The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again. If validation succeeds, the certificate enters status ISSUED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public StatusAwsCertificateManagerCertificatesApi? Status { get; init; }

    /// <summary>
    /// The renewal status of the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RenewalStatus")]
    public RenewalStatus? RenewalStatus { get; init; }

    /// <summary>
    /// The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the Certificate Manager User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeAwsCertificateManagerCertificatesApi? Type { get; init; }

    /// <summary>
    /// Indicates whether the certificate can be exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExportOption")]
    public ExportOption? ExportOption { get; init; }

    /// <summary>
    /// Identifies the Amazon Web Services service that manages the certificate issued by ACM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManagedBy")]
    public ManagedBy? ManagedBy { get; init; }

    /// <summary>
    /// Specifies the domain validation method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod? ValidationMethod { get; init; }

    /// <summary>
    /// The origin of the certificate's key pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateKeyPairOrigin")]
    public CertificateKeyPairOrigin? CertificateKeyPairOrigin { get; init; }

    /// <summary>
    /// The ARN of the ACME endpoint used to issue the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeEndpointArn")]
    public string? AcmeEndpointArn { get; init; }

    /// <summary>
    /// The ACME account identifier associated with the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeAccountId")]
    public string? AcmeAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
