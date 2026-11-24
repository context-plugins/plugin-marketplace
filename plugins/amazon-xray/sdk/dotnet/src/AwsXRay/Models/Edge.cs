using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record Edge
{
    /// <summary>
    /// Identifier of the edge. Unique within a service map.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReferenceId")]
    public int? ReferenceId { get; init; }

    /// <summary>
    /// The start time of the first segment on the edge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The end time of the last segment on the edge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SummaryStatistics")]
    public EdgeStatistics? SummaryStatistics { get; init; }

    /// <summary>
    /// A histogram that maps the spread of client response times on an edge. Only populated for synchronous edges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResponseTimeHistogram")]
    public IReadOnlyList<HistogramEntry>? ResponseTimeHistogram { get; init; }

    /// <summary>
    /// Aliases for the edge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Aliases")]
    public IReadOnlyList<Alias>? Aliases { get; init; }

    /// <summary>
    /// Describes an asynchronous connection, with a value of link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EdgeType")]
    public string? EdgeType { get; init; }

    /// <summary>
    /// A histogram that maps the spread of event age when received by consumers. Age is calculated each time an event is received. Only populated when EdgeType is link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReceivedEventAgeHistogram")]
    public IReadOnlyList<HistogramEntry>? ReceivedEventAgeHistogram { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
