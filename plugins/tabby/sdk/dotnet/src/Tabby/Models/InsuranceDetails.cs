using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record InsuranceDetails
{
    /// <summary>
    /// Information about insurance
    /// </summary>
    [JsonPropertyName("policy_details")]
    public required PolicyDetails PolicyDetails { get; init; }

    [JsonPropertyName("client")]
    public required Client Client { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_history_simple")]
    public PaymentHistorySimple? PaymentHistorySimple { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
