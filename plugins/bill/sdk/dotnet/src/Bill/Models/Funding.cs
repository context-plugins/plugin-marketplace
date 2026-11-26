using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Funding
{
    /// <summary>
    /// Credit card funding rate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCardRate")]
    public double? CreditCardRate { get; init; }

    /// <summary>
    /// Debit card funding rate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debitCardRate")]
    public double? DebitCardRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
