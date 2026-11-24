using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record AppsDailyInstalls
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    [JsonPropertyName("ipd")]
    public required int Ipd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installs")]
    public int? Installs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
