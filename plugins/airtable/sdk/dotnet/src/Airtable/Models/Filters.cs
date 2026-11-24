using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Models.Enums;

namespace Airtable.Models;

/// <summary>
/// Filters to narrow down which changes trigger the webhook.
/// </summary>
public record Filters
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceOptions")]
    public SourceOptions? SourceOptions { get; init; }

    /// <summary>
    /// The types of data changes to monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataTypes")]
    public IReadOnlyList<DataTypeEnum>? DataTypes { get; init; }

    /// <summary>
    /// The scope of record changes to monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordChangeScope")]
    public string? RecordChangeScope { get; init; }

    /// <summary>
    /// Specific field IDs to watch for changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchDataInFieldIds")]
    public IReadOnlyList<string>? WatchDataInFieldIds { get; init; }

    /// <summary>
    /// Specific field IDs whose schema changes to watch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchSchemasOfFieldIds")]
    public IReadOnlyList<string>? WatchSchemasOfFieldIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
