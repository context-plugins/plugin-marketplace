using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyFundingRound
{
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("roundAmount")]
    public required double RoundAmount { get; init; }

    [JsonPropertyName("roundType")]
    public required string RoundType { get; init; }

    [JsonPropertyName("roundDate")]
    public required string RoundDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
