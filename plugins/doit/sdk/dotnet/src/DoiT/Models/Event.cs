using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Event
{
    /// <summary>
    /// The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore (_), space, dash (-).
    /// </summary>
    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    /// <summary>
    /// The event id. Must be unique within the dataset. If not set, a UUIDv4 will be generated at ingestion time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    /// <summary>
    /// The timestamp of the event in RFC3339 format.
    /// </summary>
    [JsonPropertyName("time")]
    public required DateTimeOffset Time { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<MetricDoiTDataHubApi>? Metrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
