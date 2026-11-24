using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record ProjectProjectBuildNumTestsResponse
{
    /// <summary>
    /// List of test results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tests")]
    public IReadOnlyList<TestMetadataCircleCiRestApiV1TestMetadataApi>? Tests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
