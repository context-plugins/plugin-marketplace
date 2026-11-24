using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. The job status. Additional application-specific status information might be contained in the type_job and yarn_applications fields.
/// </summary>
public record JobStatus1
{
    /// <summary>
    /// Output only. Additional state information, which includes status reported by the agent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("substate")]
    public Substate1? Substate { get; init; }

    /// <summary>
    /// Output only. A state message specifying the overall job state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State4? State { get; init; }

    /// <summary>
    /// Output only. The time when this state was entered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateStartTime")]
    public string? StateStartTime { get; init; }

    /// <summary>
    /// Optional. Job state details, such as an error description if the state is ERROR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
