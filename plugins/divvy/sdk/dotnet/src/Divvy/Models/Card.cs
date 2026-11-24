using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record Card
{
    /// <summary>
    /// This field is set as <c>true</c> if you can pay by card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payByCard")]
    public bool? PayByCard { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if you can add a card account as a payment method
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fundingEnabled")]
    public bool? FundingEnabled { get; init; }

    /// <summary>
    /// This field is set as <c>true</c> if you can pay with an AMEX credit card
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amexAllowed")]
    public bool? AmexAllowed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
