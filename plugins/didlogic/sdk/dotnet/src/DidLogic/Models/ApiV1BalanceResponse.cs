using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1BalanceResponse
{
    /// <summary>
    /// Current account balance rounded to 2 decimal places
    /// </summary>
    [JsonPropertyName("balance")]
    public required double Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
