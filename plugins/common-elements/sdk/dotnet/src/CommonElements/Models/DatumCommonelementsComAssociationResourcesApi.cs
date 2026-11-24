using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DatumCommonelementsComAssociationResourcesApi
{
    /// <summary>
    /// Which physical source the record came from. Provenance travels with every row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_key")]
    public string? SourceKey { get; init; }

    /// <summary>
    /// The source's own identifier for the record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("record_id")]
    public string? RecordId { get; init; }

    /// <summary>
    /// When the recorded event happened, where the source publishes a date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurred_on")]
    public DateTimeOffset? OccurredOn { get; init; }

    /// <summary>
    /// One-line description of the record, from the source's own headline column.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headline")]
    public string? Headline { get; init; }

    /// <summary>
    /// The record's fields, projected through the source's column allowlist. A column added to a backing table later cannot appear here unless it is added to that allowlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payload")]
    public object? Payload { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
