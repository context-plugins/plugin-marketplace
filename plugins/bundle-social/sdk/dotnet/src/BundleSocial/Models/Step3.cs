using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Step3
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public string? Id { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "SEND_PUBLIC_COMMENT_REPLY";

    [JsonPropertyName("text")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
