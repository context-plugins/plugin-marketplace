using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Details of a native build info for a Spark Application
/// </summary>
public record AccessSessionSparkApplicationNativeBuildInfoResponse
{
    /// <summary>
    /// Native SQL Execution Data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionData")]
    public NativeBuildInfoUiData3? ExecutionData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
