using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record ChangedTablesById
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changedRecordsById")]
    public IReadOnlyDictionary<string, object>? ChangedRecordsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdRecordsById")]
    public IReadOnlyDictionary<string, object>? CreatedRecordsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destroyedRecordIds")]
    public IReadOnlyList<string>? DestroyedRecordIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changedFieldsById")]
    public IReadOnlyDictionary<string, object>? ChangedFieldsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdFieldsById")]
    public IReadOnlyDictionary<string, object>? CreatedFieldsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destroyedFieldIds")]
    public IReadOnlyList<string>? DestroyedFieldIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changedViewsById")]
    public IReadOnlyDictionary<string, object>? ChangedViewsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdViewsById")]
    public IReadOnlyDictionary<string, object>? CreatedViewsById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destroyedViewIds")]
    public IReadOnlyList<string>? DestroyedViewIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
