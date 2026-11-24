using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record DatahubV1ImportRequest
{
    /// <summary>
    /// Existing dataset (provider) name.
    /// </summary>
    [JsonPropertyName("provider")]
    public required string Provider { get; init; }

    /// <summary>
    /// Versioned schema template of the records.
    /// </summary>
    [JsonPropertyName("schemaTemplate")]
    public required string SchemaTemplate { get; init; }

    [JsonPropertyName("periodStart")]
    public required DateTimeOffset PeriodStart { get; init; }

    [JsonPropertyName("periodEnd")]
    public required DateTimeOffset PeriodEnd { get; init; }

    /// <summary>
    /// Same semantics as the <c>replace</c> field of the CSV upload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replace")]
    public bool? Replace { get; init; } = false;

    /// <summary>
    /// One object per source row; keys are the template's CSV column names. Decimals may be strings or numbers.
    /// </summary>
    [JsonPropertyName("records")]
    public required IReadOnlyList<object> Records { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
