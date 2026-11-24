using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record Tag
{
    /// <summary>
    /// A tag key, such as Stage or Name. A tag key cannot be empty. The key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// An optional tag value, such as Production or test-only. The value can be a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: + - = . _ : /
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
