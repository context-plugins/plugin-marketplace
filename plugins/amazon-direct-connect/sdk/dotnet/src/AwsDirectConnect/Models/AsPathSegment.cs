using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record AsPathSegment
{
    /// <summary>
    /// The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an unordered AS_SET).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathType")]
    public PathType? PathType { get; init; }

    /// <summary>
    /// The autonomous system (AS) numbers in the segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public IReadOnlyList<int>? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
