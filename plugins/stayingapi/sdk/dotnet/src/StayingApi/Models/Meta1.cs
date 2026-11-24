using System.Collections.Generic;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Meta1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCharged")]
    public CreditsCharged? CreditsCharged { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platforms")]
    public IReadOnlyList<Platform>? Platforms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
