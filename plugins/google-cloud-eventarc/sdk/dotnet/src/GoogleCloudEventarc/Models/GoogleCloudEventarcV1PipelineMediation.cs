using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Mediation defines different ways to modify the Pipeline.
/// </summary>
public record GoogleCloudEventarcV1PipelineMediation
{
    /// <summary>
    /// Optional. How the Pipeline is to transform messages
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transformation")]
    public GoogleCloudEventarcV1PipelineMediationTransformation2? Transformation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
