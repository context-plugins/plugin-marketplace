using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Request body for updating an insight's display status.
/// </summary>
public record UpdateStatusRequest
{
    /// <summary>
    /// The display status of the insight.
    /// </summary>
    [JsonPropertyName("status")]
    public required DisplayStatus Status { get; init; }

    /// <summary>
    /// Details for why an insight was dismissed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dismissalDetails")]
    public DismissalDetails? DismissalDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
