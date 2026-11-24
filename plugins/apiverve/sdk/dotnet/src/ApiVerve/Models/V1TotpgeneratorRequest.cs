using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1TotpgeneratorRequest
{
    /// <summary>
    /// Base32-encoded shared secret
    /// </summary>
    [JsonPropertyName("secret")]
    public required string Secret { get; init; }

    /// <summary>
    /// Number of digits in token
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("digits")]
    public int? Digits { get; init; }

    /// <summary>
    /// Time period in seconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public int? Period { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
