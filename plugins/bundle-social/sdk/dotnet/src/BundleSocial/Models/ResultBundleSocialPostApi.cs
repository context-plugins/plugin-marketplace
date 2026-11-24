using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ResultBundleSocialPostApi
{
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusBefore")]
    public StatusBefore? StatusBefore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusAfter")]
    public StatusAfter? StatusAfter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
