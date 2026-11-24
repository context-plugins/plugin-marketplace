using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Historical state information.
/// </summary>
public record SessionStateHistory
{
    /// <summary>
    /// Output only. The time when the session entered the historical state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateStartTime")]
    public string? StateStartTime { get; init; }

    /// <summary>
    /// Output only. Details about the state at this point in the session history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMessage")]
    public string? StateMessage { get; init; }

    /// <summary>
    /// Output only. The state of the session at this point in the session history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
