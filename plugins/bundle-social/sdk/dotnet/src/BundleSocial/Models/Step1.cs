using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Step1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public string? Id { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "SEND_MESSAGE";

    [JsonPropertyName("message")]
    public required Message Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
