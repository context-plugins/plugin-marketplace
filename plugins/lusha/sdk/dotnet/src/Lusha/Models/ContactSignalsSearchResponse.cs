using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactSignalsSearchResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contacts")]
    public IReadOnlyDictionary<string, ContactSignalData>? Contacts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCharged")]
    public int? CreditCharged { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
