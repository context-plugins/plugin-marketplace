using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// An insight result containing summary information and metadata.
/// </summary>
public record InsightResponse
{
    /// <summary>
    /// The source that generated the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// The unique key identifying this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// The display title of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// A brief summary of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortDescription")]
    public string? ShortDescription { get; init; }

    /// <summary>
    /// A detailed description of the insight in MDX format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detailedDescriptionMdx")]
    public string? DetailedDescriptionMdx { get; init; }

    /// <summary>
    /// The display status of the insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayStatus")]
    public DisplayStatus? DisplayStatus { get; init; }

    /// <summary>
    /// The cloud provider associated with the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudProvider")]
    public string? CloudProvider { get; init; }

    /// <summary>
    /// Categories this insight belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<Category>? Categories { get; init; }

    /// <summary>
    /// Aggregate summary of risks and savings across all resource results for an insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public InsightSummary? Summary { get; init; }

    /// <summary>
    /// If set, this object contains the last status change made by a user for this insight
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastStatusChange")]
    public LastInsightStatusChange? LastStatusChange { get; init; }

    /// <summary>
    /// Timestamp of the last update to this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdated")]
    public DateTimeOffset? LastUpdated { get; init; }

    /// <summary>
    /// Tags for the insight, primarily used for security certification labels (e.g. ISO).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// URL to an external report related to this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportUrl")]
    public string? ReportUrl { get; init; }

    /// <summary>
    /// ID of a CloudFlow template that can automate the remediation of this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudFlowTemplateId")]
    public string? CloudFlowTemplateId { get; init; }

    /// <summary>
    /// A description of why this insight is considered an easy win.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("easyWinDescription")]
    public string? EasyWinDescription { get; init; }

    /// <summary>
    /// Details for why an insight was dismissed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dismissalDetails")]
    public DismissalDetails? DismissalDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
