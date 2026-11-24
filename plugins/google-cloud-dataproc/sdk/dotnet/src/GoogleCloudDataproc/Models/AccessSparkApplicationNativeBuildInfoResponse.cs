using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details of Native Build Info for a Spark Application
/// </summary>
public record AccessSparkApplicationNativeBuildInfoResponse
{
    /// <summary>
    /// Native Build Info Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildInfo")]
    public NativeBuildInfoUiData2? BuildInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
