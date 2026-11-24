using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UpdateFeatureStatusDto
{
    /// <summary>
    /// The status to set the Feature's status to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status4? Status { get; init; }

    /// <summary>
    /// The ID of the custom status to set the Feature's status to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_customStatus")]
    public string? CustomStatus { get; init; }

    /// <summary>
    /// The variation key or ID to serve if the status is set to complete
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("staticVariation")]
    public string? StaticVariation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
