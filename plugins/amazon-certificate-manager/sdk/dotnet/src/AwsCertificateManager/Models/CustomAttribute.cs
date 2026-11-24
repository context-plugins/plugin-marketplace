using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record CustomAttribute
{
    /// <summary>
    /// Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ObjectIdentifier")]
    public string? ObjectIdentifier { get; init; }

    /// <summary>
    /// Specifies the attribute value of relative distinguished name (RDN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
