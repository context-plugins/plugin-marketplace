using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Events returned for the requested page.
/// </summary>
public record SignalEventDto
{
    /// <summary>
    /// Unique identifier for the monitor event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public Guid? Uuid { get; init; }

    /// <summary>
    /// Date and time the event was created, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Date and time the event was last updated, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Date and time the detected event occurred, in ISO 8601 format when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventDate")]
    public DateTimeOffset? EventDate { get; init; }

    /// <summary>
    /// Detected event category produced by the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventType")]
    public string? EventType { get; init; }

    /// <summary>
    /// Structured event fields defined by the monitor's data schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyDictionary<string, object>? Data { get; init; }

    /// <summary>
    /// Perigon article IDs related to the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relatedArticleIds")]
    public IReadOnlyList<string>? RelatedArticleIds { get; init; }

    /// <summary>
    /// Article details keyed by article ID for articles related to the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articles")]
    public IReadOnlyDictionary<string, SignalArticlePartialDto>? Articles { get; init; }

    /// <summary>
    /// Entities matched in the content that produced the event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    public IReadOnlyList<MatchedEntityData>? Entities { get; init; }

    /// <summary>
    /// AI-generated summary of the event, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fillbotMetadata")]
    public FillbotMetadata? FillbotMetadata { get; init; }

    /// <summary>
    /// Date and time enrichment is scheduled to run, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fillbotScheduleAt")]
    public DateTimeOffset? FillbotScheduleAt { get; init; }

    /// <summary>
    /// Date and time enrichment last ran, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fillbotLastRunAt")]
    public DateTimeOffset? FillbotLastRunAt { get; init; }

    /// <summary>
    /// Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fillbotStatus")]
    public FillbotStatus? FillbotStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicate")]
    public bool? Duplicate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xPosts")]
    public IReadOnlyList<XPost>? XPosts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
