using System.Collections.Generic;
using System.Text.Json.Serialization;
using LastDatabase.Core.Models;
using LastDatabase.Core.Validation.Attributes;
using LastDatabase.Models.AnyOf;
using LastDatabase.Models.Enums;

namespace LastDatabase.Models;

public record LeadSearchResponse
{
    [JsonPropertyName("status")]
    public string Status { get; } = "True";

    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("count")]
    [Minimum(0)]
    public required int Count { get; init; }

    /// <summary>
    /// Lead records. Available fields depend on the
    /// requested inventory type and source data.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<Datum> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
