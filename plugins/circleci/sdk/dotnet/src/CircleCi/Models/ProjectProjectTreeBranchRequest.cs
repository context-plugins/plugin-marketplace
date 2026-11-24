using System.Collections.Generic;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record ProjectProjectTreeBranchRequest
{
    /// <summary>
    /// Number of parallel containers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parallel")]
    public int? Parallel { get; init; }

    /// <summary>
    /// The specific revision to build
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// Additional build parameters
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_parameters")]
    public IReadOnlyDictionary<string, string>? BuildParameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
