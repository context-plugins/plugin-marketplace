using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AnalyticsPostRawResponse
{
    [JsonPropertyName("post")]
    public required Post? Post { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profilePost")]
    public ProfilePost? ProfilePost { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<Item3> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
