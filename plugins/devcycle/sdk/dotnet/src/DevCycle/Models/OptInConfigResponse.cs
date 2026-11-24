using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record OptInConfigResponse
{
    [JsonPropertyName("settings")]
    public required Settings Settings { get; init; }

    [JsonPropertyName("features")]
    public required IReadOnlyList<FeatureDevCycleBucketingFeatureOptInApi> Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
