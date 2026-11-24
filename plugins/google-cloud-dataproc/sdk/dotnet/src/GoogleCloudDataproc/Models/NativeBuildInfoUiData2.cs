using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Native Build Info Data
/// </summary>
public record NativeBuildInfoUiData2
{
    /// <summary>
    /// Optional. Build related details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildInfo")]
    public IReadOnlyList<BuildInfo>? BuildInfo { get; init; }

    /// <summary>
    /// Optional. Build class of Native.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildClass")]
    public string? BuildClass { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
