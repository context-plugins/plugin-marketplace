using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record Summary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_count")]
    public int? TotalCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
