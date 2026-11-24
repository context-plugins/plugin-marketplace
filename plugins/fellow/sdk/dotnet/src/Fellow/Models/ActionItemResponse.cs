using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a single action item.
/// </summary>
public record ActionItemResponse
{
    /// <summary>
    /// API model for action items. Action items are stored as NoteBlock objects with type='todo'.
    /// </summary>
    [JsonPropertyName("action_item")]
    public required ActionItem ActionItem { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
