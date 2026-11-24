using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

/// <summary>
/// The price table the feed prices every call from, byte for byte. A call costs max(1, ceil(whole x each named filter's points / 100)).
/// </summary>
public record PriceTable
{
    [JsonPropertyName("rate_card")]
    public required string RateCard { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provisional")]
    public bool? Provisional { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("captured_at")]
    public string? CapturedAt { get; init; }

    [JsonPropertyName("recent")]
    public required Recent Recent { get; init; }

    [JsonPropertyName("regions")]
    public required object Regions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
