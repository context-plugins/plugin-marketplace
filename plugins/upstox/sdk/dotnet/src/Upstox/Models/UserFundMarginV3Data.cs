using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record UserFundMarginV3Data
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_to_trade")]
    public AvailableToTrade? AvailableToTrade { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unavailable_to_trade")]
    public UnavailableToTrade? UnavailableToTrade { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
