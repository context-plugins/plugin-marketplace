using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record UserSignatureQualitiesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qes")]
    public Qes? Qes { get; init; }

    /// <summary>
    /// Best possible quality, but AES at a minimum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aes_minimal")]
    public AesMinimal? AesMinimal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aes")]
    public Aes? Aes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ses")]
    public Ses? Ses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
