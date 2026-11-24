using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record ContactSignalsSearchRequest
{
    [JsonPropertyName("contacts")]
    public required IReadOnlyList<ContactLushaSignalsApi> Contacts { get; init; }

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
