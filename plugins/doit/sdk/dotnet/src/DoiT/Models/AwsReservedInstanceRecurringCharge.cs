using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsReservedInstanceRecurringCharge
{
    /// <summary>
    /// Amount of the recurring charge.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// Billing frequency of the recurring charge (for example, <c>Hourly</c>).
    /// </summary>
    [JsonPropertyName("frequency")]
    public required string Frequency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
