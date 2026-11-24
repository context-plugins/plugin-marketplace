using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record AcmCertificateMetadataFilter
{
    /// <summary>
    /// Filter by certificate status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status1? Status { get; init; }

    /// <summary>
    /// Filter by certificate renewal status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RenewalStatus")]
    public RenewalStatus1? RenewalStatus { get; init; }

    /// <summary>
    /// Filter by certificate type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// Filter by whether the certificate is in use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InUse")]
    public bool? InUse { get; init; }

    /// <summary>
    /// Filter by whether the certificate has been exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Exported")]
    public bool? Exported { get; init; }

    /// <summary>
    /// Filter by certificate export option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExportOption")]
    public ExportOption1? ExportOption { get; init; }

    /// <summary>
    /// Filter by the entity that manages the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ManagedBy")]
    public ManagedBy1? ManagedBy { get; init; }

    /// <summary>
    /// Filter by validation method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationMethod")]
    public ValidationMethod1? ValidationMethod { get; init; }

    /// <summary>
    /// Filter by certificate key pair origin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateKeyPairOrigin")]
    public CertificateKeyPairOrigin1? CertificateKeyPairOrigin { get; init; }

    /// <summary>
    /// Filter by ACME endpoint ARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeEndpointArn")]
    public string? AcmeEndpointArn { get; init; }

    /// <summary>
    /// Filter by ACME account identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeAccountId")]
    public string? AcmeAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
