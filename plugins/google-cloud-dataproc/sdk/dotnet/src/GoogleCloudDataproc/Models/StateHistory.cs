using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Historical state information.
/// </summary>
public record StateHistory
{
    /// <summary>
    /// Output only. Details about the state at this point in history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    /// <summary>
    /// Output only. The state of the batch at this point in history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State6? State { get; init; }

    /// <summary>
    /// Output only. The time when the batch entered the historical state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateStartTime")]
    public string? StateStartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
