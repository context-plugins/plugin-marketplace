using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record X509Attributes
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Issuer")]
    public DistinguishedName? Issuer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Subject")]
    public DistinguishedName? Subject { get; init; }

    /// <summary>
    /// One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubjectAlternativeNames")]
    public IReadOnlyList<GeneralName>? SubjectAlternativeNames { get; init; }

    /// <summary>
    /// Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExtendedKeyUsages")]
    public IReadOnlyList<ExtendedKeyUsage2>? ExtendedKeyUsages { get; init; }

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
    /// The serial number assigned by the certificate authority.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SerialNumber")]
    public string? SerialNumber { get; init; }

    /// <summary>
    /// The time after which the certificate is not valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotAfter")]
    public DateTimeOffset? NotAfter { get; init; }

    /// <summary>
    /// The time before which the certificate is not valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotBefore")]
    public DateTimeOffset? NotBefore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
