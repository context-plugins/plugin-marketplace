using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record CompanySignalsSearchRequest
{
    [JsonPropertyName("companies")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<Company1LushaSignalsApi> Companies { get; init; }

    [JsonPropertyName("signals")]
    public required IReadOnlyList<Signal1> Signals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResultsPerSignal")]
    public int? MaxResultsPerSignal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public Filters1LushaSignalsApi? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
