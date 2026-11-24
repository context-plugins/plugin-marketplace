using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record CardDetails
{
    /// <summary>
    /// Card token identifier (card_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public string? Entity { get; init; }

    /// <summary>
    /// Cardholder name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Last 4 digits of the card number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last4")]
    public string? Last4 { get; init; }

    /// <summary>
    /// Card network. Examples: Visa, MasterCard, RuPay, Amex.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network")]
    public string? Network { get; init; }

    /// <summary>
    /// Card type: credit or debit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// 4-character code of the issuing bank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer")]
    public string? Issuer { get; init; }

    /// <summary>
    /// Whether EMI is available on this card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emi")]
    public bool? Emi { get; init; }

    /// <summary>
    /// Card sub-type (e.g. consumer, corporate).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_type")]
    public string? SubType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
