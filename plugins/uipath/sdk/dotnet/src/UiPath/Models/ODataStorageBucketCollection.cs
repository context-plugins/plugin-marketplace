using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// OData collection response containing storage buckets
/// </summary>
public record ODataStorageBucketCollection
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public IReadOnlyList<ValueUiPathOrchestratorStorageBucketsApi>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
