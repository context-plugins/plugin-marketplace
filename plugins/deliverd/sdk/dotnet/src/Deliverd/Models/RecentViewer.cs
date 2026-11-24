using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record RecentViewer
{
    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    [JsonPropertyName("principalType")]
    public required string PrincipalType { get; init; }

    [JsonPropertyName("viewCount")]
    public required double ViewCount { get; init; }

    [JsonPropertyName("lastViewedAt")]
    public required string LastViewedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
