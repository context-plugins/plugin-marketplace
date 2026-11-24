using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record Tag
{
    /// <summary>
    /// The key of the tag.
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// The value of the tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
