using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record Tag
{
    /// <summary>
    /// Tag key. The key can't start with aws:.
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// Value of the tag key.
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
