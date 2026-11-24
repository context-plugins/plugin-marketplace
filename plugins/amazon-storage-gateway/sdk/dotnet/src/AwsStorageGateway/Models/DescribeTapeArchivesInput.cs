using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DescribeTapeArchivesInput
{
    /// <summary>
    /// Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeARNs")]
    public IReadOnlyList<string>? TapeArNs { get; init; }

    /// <summary>
    /// An opaque string that indicates the position at which to begin describing virtual tapes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Marker")]
    public string? Marker { get; init; }

    /// <summary>
    /// Specifies that the number of virtual tapes described be limited to the specified number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Limit")]
    public int? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
