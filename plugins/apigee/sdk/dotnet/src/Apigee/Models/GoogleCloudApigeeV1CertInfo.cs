using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// X.509 certificate as defined in RFC 5280.
/// </summary>
public record GoogleCloudApigeeV1CertInfo
{
    /// <summary>
    /// Public key component of the X.509 subject public key info.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicKey")]
    public string? PublicKey { get; init; }

    /// <summary>
    /// X.509 serial number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serialNumber")]
    public string? SerialNumber { get; init; }

    /// <summary>
    /// X.509 signatureAlgorithm.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sigAlgName")]
    public string? SigAlgName { get; init; }

    /// <summary>
    /// X.509 issuer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer")]
    public string? Issuer { get; init; }

    /// <summary>
    /// X.509 <c>notAfter</c> validity period in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiryDate")]
    public string? ExpiryDate { get; init; }

    /// <summary>
    /// X.509 <c>notBefore</c> validity period in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validFrom")]
    public string? ValidFrom { get; init; }

    /// <summary>
    /// X.509 version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public int? Version { get; init; }

    /// <summary>
    /// X.509 subject alternative names (SANs) extension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subjectAlternativeNames")]
    public IReadOnlyList<string>? SubjectAlternativeNames { get; init; }

    /// <summary>
    /// X.509 basic constraints extension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basicConstraints")]
    public string? BasicConstraints { get; init; }

    /// <summary>
    /// X.509 subject.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    /// <summary>
    /// Flag that specifies whether the certificate is valid. Flag is set to <c>Yes</c> if the certificate is valid, <c>No</c> if expired, or <c>Not yet</c> if not yet valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isValid")]
    public string? IsValid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
