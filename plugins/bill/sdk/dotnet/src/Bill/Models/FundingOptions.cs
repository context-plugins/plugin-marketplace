using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Funding options.
/// </summary>
public record FundingOptions
{
    /// <summary>
    /// Bank account options
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("banks")]
    public IReadOnlyList<BankFundingOption>? Banks { get; init; }

    /// <summary>
    /// Card account options
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cards")]
    public IReadOnlyList<CardFundingOption>? Cards { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
