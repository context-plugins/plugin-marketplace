using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// User provided options for processing the recurring payment.
/// </summary>
public record RecurringBillProcessingOptions
{
    /// <summary>
    /// Set as <c>true</c> to enable auto-payment for each bill
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoPayment")]
    public bool? AutoPayment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
