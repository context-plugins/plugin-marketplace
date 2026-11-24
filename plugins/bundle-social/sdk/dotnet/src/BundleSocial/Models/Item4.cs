using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Item4
{
    [JsonPropertyName("title")]
    [MinLength(1)]
    public required string Title { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "POSTBACK";

    [JsonPropertyName("payload")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Payload { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
