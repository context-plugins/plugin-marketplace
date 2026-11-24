using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.Enums;

namespace Fellow.Models;

public record ActionItemFilters
{
    /// <summary>
    /// Only return action items created at or after this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at_start")]
    public string? CreatedAtStart { get; init; }

    /// <summary>
    /// Only return action items created at or before this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at_end")]
    public string? CreatedAtEnd { get; init; }

    /// <summary>
    /// Only return action items updated at or after this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day. Whether updated_at moves depends on where the change was made. Edits in the note itself, including its text, completion, assignees and due date, all bump updated_at. An assignee or due date changed outside the note, such as from the action items list, is written to a separate record and leaves updated_at unchanged, so this filter does not pick that item up.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at_start")]
    public string? UpdatedAtStart { get; init; }

    /// <summary>
    /// Only return action items updated at or before this date. Accepts YYYY-MM-DD or an ISO datetime, and is inclusive. A value without a time means midnight UTC, so an end bound of 2024-01-05 excludes everything later that day. Whether updated_at moves depends on where the change was made. Edits in the note itself, including its text, completion, assignees and due date, all bump updated_at. An assignee or due date changed outside the note, such as from the action items list, is written to a separate record and leaves updated_at unchanged, so this filter does not pick that item up.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at_end")]
    public string? UpdatedAtEnd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public bool? Completed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_detected")]
    public bool? AiDetected { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_suggestion_accepted_by_user")]
    public bool? AiSuggestionAcceptedByUser { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public Scope? Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
