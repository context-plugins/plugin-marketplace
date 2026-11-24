using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

public record RecapActionItem
{
    [JsonPropertyName("timestamp")]
    public required int Timestamp { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonPropertyName("assignees")]
    public required IReadOnlyList<ActionItemAssignee> Assignees { get; init; }

    [JsonPropertyName("completion_type")]
    public required CompletionType? CompletionType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_date")]
    public string? DueDate { get; init; }

    [JsonPropertyName("accepted")]
    public required bool Accepted { get; init; }

    [JsonPropertyName("status")]
    public required ActionItemStatus Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
