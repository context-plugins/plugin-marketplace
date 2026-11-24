using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3CompanySignalsRequest
{
    [JsonPropertyName("ids")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonPropertyName("signalTypes")]
    public required IReadOnlyList<SignalType1> SignalTypes { get; init; }

    /// <summary>
    /// For linkedinActivityIntent, results are limited to a trailing 90-day window regardless of the value passed (legal requirement). Other signal types are unaffected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// For linkedinActivityIntent, results are capped at 50 per company regardless of the value passed. Other signal types use the requested value as-is (1-100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResultsPerSignal")]
    [Minimum(1)]
    [Maximum(100)]
    public int? MaxResultsPerSignal { get; init; }

    /// <summary>
    /// Optional. If provided, these companies are also added to this table (if not already present) and the Signals column is populated. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public FiltersLushaSignalsApi? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
