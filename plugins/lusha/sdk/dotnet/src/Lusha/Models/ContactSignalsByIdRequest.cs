using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record ContactSignalsByIdRequest
{
    [JsonPropertyName("contactIds")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<int> ContactIds { get; init; }

    [JsonPropertyName("signals")]
    public required IReadOnlyList<Signal> Signals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResultsPerSignal")]
    public int? MaxResultsPerSignal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
