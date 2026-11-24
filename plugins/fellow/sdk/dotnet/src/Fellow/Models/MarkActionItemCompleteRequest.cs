using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Request body for marking an action item as complete or incomplete.
/// </summary>
public record MarkActionItemCompleteRequest
{
    [JsonPropertyName("completed")]
    public required bool Completed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
