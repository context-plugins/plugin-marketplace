using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record GeneralName
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DirectoryName")]
    public DistinguishedName? DirectoryName { get; init; }

    /// <summary>
    /// Represents GeneralName as a DNS name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DnsName")]
    public string? DnsName { get; init; }

    /// <summary>
    /// Represents GeneralName as an IPv4 or IPv6 address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IpAddress")]
    public string? IpAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OtherName")]
    public OtherName? OtherName { get; init; }

    /// <summary>
    /// Represents GeneralName as an object identifier (OID).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RegisteredId")]
    public string? RegisteredId { get; init; }

    /// <summary>
    /// Represents GeneralName as an RFC 822 email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Rfc822Name")]
    public string? Rfc822Name { get; init; }

    /// <summary>
    /// Represents GeneralName as a URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UniformResourceIdentifier")]
    public string? UniformResourceIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
