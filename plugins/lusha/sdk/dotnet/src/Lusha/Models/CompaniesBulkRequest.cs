using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record CompaniesBulkRequest
{
    [JsonPropertyName("companies")]
    public required IReadOnlyList<CompanyBulkRequest> Companies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public IReadOnlyList<Signal1>? Signals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalsStartDate")]
    public DateTimeOffset? SignalsStartDate { get; init; }

    /// <summary>
    /// Optional filters to narrow signal results within the requested signal types.
    /// - Multi-value filters use <b>OR</b> logic
    /// - Filter values are <b>not</b> case-sensitive
    /// - Unrecognized values are <b>silently ignored</b>
    /// - <c>state</c> without <c>country</c> in <c>hiringByLocations</c> returns HTTP <b>400</b>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalsFilters")]
    public SignalsFilters? SignalsFilters { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partialCompany")]
    public bool? PartialCompany { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
